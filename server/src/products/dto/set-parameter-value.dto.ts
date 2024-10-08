import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { MultilingualField } from "src/types/multilingual-field";

export class SetParameterValueDto {
    productId: string
    parameterId: string

    @ValidateNested()
    @Type(() => MultilingualField)
    readonly value: MultilingualField;
}