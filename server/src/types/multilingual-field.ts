import { IsString } from "class-validator"

export class MultilingualField {
    @IsString()
    languageId: string

    @IsString()
    translanion: string
}
