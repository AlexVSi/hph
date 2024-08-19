import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsEmail, Length } from "class-validator"

export class CreateUserDto {
    @ApiProperty({ example: 'Олег', description: 'Имя' })
    @IsString({ message: 'Должно быть строкой' })
    readonly firstname: string

    @ApiProperty({ example: 'Савченко', description: 'Фамилия' })
    @IsString({ message: 'Должно быть строкой' })
    readonly lastname: string

    @ApiProperty({ example: 'example@mail.com', description: 'email' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string

    @ApiProperty({ example: 'P@ssw0rd', description: 'Пароль' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(8, 32, { message: 'Пароль должен быть не меньше 8 и не больше 32 символов' })
    readonly password: string

    @ApiProperty({ example: '', description: '' })
    readonly activationLink?: string;

}
