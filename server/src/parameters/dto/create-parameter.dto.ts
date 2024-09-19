import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { MultilingualField } from "src/types/multilingual-field"

export class CreateParameterDto {
    readonly categoryId: string

    readonly valueType: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MultilingualField)
    readonly parameterT: MultilingualField[];
}