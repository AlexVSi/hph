import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs'
import { User } from 'src/users/users.model';
import { v4 } from 'uuid';
import { MailService } from './mail.service';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService,
        private mailService: MailService) { }

    async login(userDto: LoginUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const duplicateEmail = await this.userService.getUserByEmail(userDto.email);
        if (duplicateEmail) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const duplicatePhoneNumber = await this.userService.getUserByPhoneNumber(userDto.phoneNumber);
        if (duplicatePhoneNumber) {
            throw new HttpException('Пользователь с таким номером телефона уже существует', HttpStatus.BAD_REQUEST)
        }
        const activationLink = v4()
        const hashPassword = await bcryptjs.hash(userDto.password, 5);
        const user = await this.userService.createUser({ ...userDto, activationLink: activationLink, password: hashPassword });
        await this.mailService.sendActivationMail(userDto.email, `${process.env.API_URL}/users/activate/${activationLink}`)
        return this.generateToken(user)
    }

    async generateToken(user: User) {
        const payload = { email: user.email, id: user.id, roles: user.roles }
        return {
            token: this.jwtService.sign(payload, {
                secret: process.env.PRIVATE_KEY,
                expiresIn: '1h',
            })
        }
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (!user) {
            throw new UnauthorizedException({message: 'Неверный логин или пароль'})
        }
        const passwordEquals = await bcryptjs.compare(userDto.password, user.password)
        if (!passwordEquals) {
            throw new UnauthorizedException({message: 'Неверный логин или пароль'})
        }
        return user;
    }
}
