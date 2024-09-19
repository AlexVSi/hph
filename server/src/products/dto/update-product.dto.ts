import { IsArray, IsInt, IsNumber, IsOptional, IsString, Min, ValidateNested } from "class-validator";
import { CreateProductDto } from "./create-product.dto";
import { Type } from "class-transformer";
import { MultilingualField } from "src/types/multilingual-field";
import { ProductMultilingualField } from "../types/product-multilingual-field";

export class UpdateProductDto extends CreateProductDto {
    productId: string

    @IsString({ message: 'Должно быть строкой' })
    readonly articleNumber: string

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