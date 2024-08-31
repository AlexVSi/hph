import { Type } from "class-transformer"
import { IsInt, IsNumber, IsOptional, IsString, Min, ValidateNested } from "class-validator"
import { MultilingualField } from "src/types/multilingual-field"

export class CreateProductDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly articleNumber: string

    @IsOptional()
    @IsString({ message: 'Должно быть строкой' })
    barCode?: string

    @ValidateNested()
    @Type(() => MultilingualField)
    readonly name: MultilingualField

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

    @ValidateNested()
    @Type(() => MultilingualField)
    readonly description: MultilingualField
}
