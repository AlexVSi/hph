import { Body, Controller, Get, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { GetFavoriteProductsDto } from './dto/get-favorite-products.dto';
import { AddProductDto } from './dto/add-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';

@Controller('favorites')
export class FavoritesController {
    constructor(private favoritesService: FavoritesService) { }

    @Get('')
    getFavoriteProducts(@Body() dto: GetFavoriteProductsDto) {
        return this.favoritesService.getFavoriteProducts(dto)
    }

    @Post('add-product')
    addProduct(@Body() dto: AddProductDto) {
        return this.favoritesService.addProduct(dto)
    }

    @Post('remove-product')
    removeProduct(@Body() dto: RemoveProductDto) {
        return this.favoritesService.removeProduct(dto)
    }
}
