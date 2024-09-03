import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuards } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { Response } from 'express';
import { UserActivatedGuard } from '../users/user-activated.guard';
import { GetUserRoleDto } from './dto/get-user-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DeleteUserDto } from './dto/delete-user.dto';
import { SetLegalsEntityDto } from './dto/set-legals-entity.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: 'Получить всех вользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Roles("ADMIN")
    @UseGuards(RolesGuards)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuards)
    @Get('/email')
    getUserByEmail(@Body() { email }) {
        return this.usersService.getUserByEmail(email)
    }

    @ApiOperation({ summary: 'Выдать ролль' })
    @ApiResponse({ status: 200 })
    @Roles("ADMIN")
    @UseGuards(RolesGuards)
    @Post('/add-role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({ summary: 'Бан пользователя' })
    @ApiResponse({ status: 200 })
    @Roles("ADMIN")
    @UseGuards(RolesGuards)
    @Post('/ban')
    banUser(@Body() dto: BanUserDto) {
        return this.usersService.banUser(dto);
    }

    @Get('/activate/:activationLink')
    activate(@Param() params: any, @Res() res: Response) {
        this.usersService.activate(params.activationLink)
        res.redirect(process.env.CLIENT_URL)
    }

    @Post('/get-roles')
    @Roles("ADMIN")
    @UseGuards(RolesGuards)
    getUserRoles(@Body() dto: GetUserRoleDto) {
        return this.usersService.getUserRoles(dto)
    }

    @Put('/update')
    @UseGuards(JwtAuthGuard)
    updateUser(@Body() dto: UpdateUserDto) {
        return this.usersService.updateUser(dto)
    }

    @Put('/change-password')
    @UseGuards(JwtAuthGuard)
    changePassword(@Body() dto: ChangePasswordDto) {
        return this.usersService.changePassword(dto)
    }

    @Delete('/delete')
    @UseGuards(JwtAuthGuard)
    deleteUser(@Body() dto: DeleteUserDto) {
        return this.usersService.deleteUser(dto)
    }

    @Post('/set-legals-entity')
    @UseGuards(JwtAuthGuard)
    setLegalsEntity(@Body() dto: SetLegalsEntityDto) {
        return this.usersService.setLegalsEntity(dto)
    }
}
