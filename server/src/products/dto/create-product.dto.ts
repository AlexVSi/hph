import { Type } from "class-transformer"
import { IsArray, IsInt, IsNumber, IsOptional, IsString, Min, ValidateNested } from "class-validator"
import { ProductMultilingualField } from "../types/product-multilingual-field"

export class CreateProductDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly articleNumber: string

    @IsOptional()
    @IsString({ message: 'Должно быть строкой' })
    readonly barCode?: string

    @IsString({ message: 'Должно быть строкой' })
    readonly categoryId: string

    @IsInt()
    @Min(0)
    readonly amount: number

    @IsNumber()
    @Min(0)
    readonly price: number

    @IsOptional()
    @IsNumber()
    @Min(0)
    readonly sale?: number

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductMultilingualField)
    readonly informationT: ProductMultilingualField[]
}
