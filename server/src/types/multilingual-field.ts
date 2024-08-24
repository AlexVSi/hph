import { IsString } from "class-validator"

export class MultilingualField {
    @IsString()
    ru: string;

    @IsString()
    ro: string;

    @IsString()
    en: string;
}
