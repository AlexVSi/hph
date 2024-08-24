import { BasketDto } from "./basket.dto";

export class AddProductDto extends BasketDto {
    readonly amount: number
}