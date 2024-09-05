import { Type } from "class-transformer"
import { ValidateNested } from "class-validator"
import { MultilingualField } from "src/types/multilingual-field"

export class UpdateStatusDto {
    statusId: string

    @ValidateNested()
    @Type(() => MultilingualField)
    status: object
}