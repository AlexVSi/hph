import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { MultilingualField } from "src/types/multilingual-field";

export class UpdateCategoryDto {
    readonly categoryId: string

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MultilingualField)
    readonly categoryT: MultilingualField[];
}