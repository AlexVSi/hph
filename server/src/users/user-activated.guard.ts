import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";

@Injectable()
export class UserActivatedGuard implements CanActivate {
    constructor(private jwtService: JwtService,
                private userService: UsersService
    ) {}
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        try {
            const token = request.headers.authorization.split(' ')[1];
            const authUser = this.jwtService.verify(token)
            console.log(authUser.email)
            const user = await this.userService.getUserByEmail(authUser.email)
            if (!user.isActivated) {
                throw new HttpException('Нет доступа. Аккаунт не активирован', HttpStatus.FORBIDDEN)
            }
            return true;
        } catch (e) {
            throw new HttpException('Нет доступа. Аккаунт не активирован', HttpStatus.FORBIDDEN)
        }
    }
}