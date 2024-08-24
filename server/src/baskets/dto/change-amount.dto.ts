import { BasketDto } from "./basket.dto"

export class ChangeAmountDto extends BasketDto {
    readonly amount: number
}