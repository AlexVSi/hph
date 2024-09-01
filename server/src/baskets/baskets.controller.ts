import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AddProductDto } from './dto/add-product.dto';
import { BasketsService } from './baskets.service';
import { ChangeAmountProductDto } from './dto/change-amount-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';
import { GetBasketProductsDto } from './dto/get-basket-products.dto';

@Controller('basket')
export class BasketsController {
    constructor(private basketsServise: BasketsService) { }

    @Get('')
    getBasketProducts(@Body() dto: GetBasketProductsDto) {
        return this.basketsServise.getBasketProducts(dto)
    }

    @Post('/add-product')
    addProduct(@Body() dto: AddProductDto) {
        return this.basketsServise.addProduct(dto)
    }

    @Delete('/delete')
    removeProduct(@Body() dto: RemoveProductDto) {
        this.basketsServise.removeProduct(dto)
    }

    @Put('/change-amount')
    changeAmountProduct(@Body() dto: ChangeAmountProductDto) {
        return this.basketsServise.changeAmountProduct(dto)
    }
}
