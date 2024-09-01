import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { MultilingualField } from "src/types/multilingual-field";

export class UpdateCategoryDto {
    readonly categoryId: string

    @ValidateNested()
    @Type(() => MultilingualField)
    readonly category: MultilingualField;
}