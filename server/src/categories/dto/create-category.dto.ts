import { Type } from "class-transformer"
import { IsNumber, IsOptional, Min, ValidateNested } from "class-validator"
import { MultilingualField } from "src/types/multilingual-field"


export class CreateCategoryDto {
    @ValidateNested()
    @Type(() => MultilingualField)
    category: MultilingualField;

    @IsOptional()
    @IsNumber()
    @Min(0)
    sale?: number;
}
