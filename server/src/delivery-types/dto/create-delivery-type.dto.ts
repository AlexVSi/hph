import { Type } from "class-transformer"
import { ValidateNested } from "class-validator"
import { MultilingualField } from "src/types/multilingual-field"

export class CreateDeliveryTypeDto {
    @ValidateNested()
    @Type(() => MultilingualField)
    deliverType: object

    price: number

    @ValidateNested()
    @Type(() => MultilingualField)
    description: object
}