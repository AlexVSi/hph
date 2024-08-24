import { IsInt, IsNumber, IsObject, IsString, Min } from "class-validator"

export class CreateProductDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly articleNumber: string
    
    @IsObject()
    readonly name: IMultilingualField

    @IsString({ message: 'Должно быть строкой' })
    readonly categoryId: string

    @IsInt()
    @Min(0)
    readonly amount: number

    @IsNumber()
    @Min(0)
    readonly price: number

    @IsNumber()
    @Min(0)
    readonly sale?: number

    @IsObject()
    readonly description: IMultilingualField
}
