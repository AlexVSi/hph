import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ example: '5e94e86f-f6fd-44dd-b5a1-f191b38ddd93', description: 'uuid' })
    @IsString({ message: 'Должно быть строкой' })
    readonly userId: string

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

    @ApiProperty({ example: '+373 (60) 123456', description: 'Номер телефона' })
    @IsString({ message: 'Должно быть строкой' })
    readonly phoneNumber: string
}