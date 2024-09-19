import { Type } from "class-transformer"
import { IsArray, IsNumber, IsOptional, Min, ValidateNested } from "class-validator"
import { MultilingualField } from "src/types/multilingual-field"

export class CreateCategoryDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MultilingualField)
    readonly categoryT: MultilingualField[]

    @IsOptional()
    @IsNumber()
    @Min(0)
    readonly sale?: number;
}
