import { IsString } from "class-validator"

export class AddRoleDto {
    @IsString({message: 'Должно быть строкой'})
    readonly role: string;

    @IsString({message: 'Должно быть строкой'})
    readonly userId: string;
}