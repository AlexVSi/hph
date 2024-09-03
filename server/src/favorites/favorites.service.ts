import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Favorite } from './favorites.model';
import { GetFavoriteProductsDto } from './dto/get-favorite-products.dto';
import { AddProductDto } from './dto/add-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';

@Injectable()
export class FavoritesService {
    constructor(@InjectModel(Favorite) private favoriteRepository: typeof Favorite) { }

    async createFavorite(dto: CreateFavoriteDto) {
        await this.favoriteRepository.create(dto)
    }

    async getFavoriteProducts(dto: GetFavoriteProductsDto) {
        const favoriteProducts = await this.favoriteRepository.findByPk(dto.favoriteId, { include: { all: true } })
        return favoriteProducts
    }

    async addProduct(dto: AddProductDto) {
        const favorite = await this.favoriteRepository.findByPk(dto.favoriteId)
        await favorite.$add('products', [dto.productId])
        return favorite
    }

    async removeProduct(dto: RemoveProductDto) {
        await this.favoriteRepository.destroy({ where: { id: dto.favoriteId } })
    }
}
