import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { MultilingualField } from "src/types/multilingual-field"

export class UpdateParameterDto {
    parameterId: string
    @ValidateNested()
    @Type(() => MultilingualField)
    readonly parameter: MultilingualField;
}