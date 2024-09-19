import { IsString } from "class-validator"

export class ProductMultilingualField {
    @IsString()
    languageId: string
    
    @IsString()
    nameT: string

    @IsString()
    descriptionT: string
}