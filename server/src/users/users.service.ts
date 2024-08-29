import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { BannedUser } from './banned-user.model';
import { BasketsService } from 'src/baskets/baskets.service';
import { FavoritesService } from 'src/favorites/favorites.service';
import { GetUserRoleDto } from './dto/get-user-role.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import * as bcryptjs from 'bcryptjs'
import { EditUserDto } from './dto/edit-user.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        @InjectModel(BannedUser) private bannedUserRepository: typeof BannedUser,
        private roleService: RolesService,
        private basketsService: BasketsService,
        private favoritesService: FavoritesService) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRole("USER")
        await this.basketsService.createBasket({ userId: user.id })
        await this.favoritesService.createFavorite({ userId: user.id })
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } })
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } })
        return user;
    }

    async getUserByPhoneNumber(phoneNumber: string) {
        const user = await this.userRepository.findOne({ where: { phoneNumber }, include: { all: true } })
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRole(dto.role)
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
    }

    async ban(dto: BanUserDto) {
        const bannedUser = await this.bannedUserRepository.create(dto)
        return bannedUser
    }

    async activate(activationLink: string) {
        const user = await this.userRepository.findOne({
            where: {
                activationLink: activationLink
            }
        })
        if (!user) {
            throw new HttpException('Ссылка не найдена', HttpStatus.NOT_FOUND)
        }
        user.isActivated = true;
        await user.save()
    }

    async getUserRoles(dto: GetUserRoleDto) {
        const user = await this.userRepository.findOne({ where: { email: dto.email }, include: { all: true } })
        return user.roles
    }

    async editUser(dto: EditUserDto) {
        await this.userRepository.update(dto, { where: { id: dto.userId } })
        const user = await this.userRepository.findByPk(dto.userId)
        return user
    }

    async changePassword(dto: ChangePasswordDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const hashPassword = await bcryptjs.hash(dto.newPassword, 5)
        user.password = hashPassword;
        await user.save();
        return user
    }

    async deleteUser(dto) {
        const user = await this.userRepository.destroy({ where: { id: dto.userId } })
        return user
    }
}
