import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './baskets.model';
import { CreateBasketDto } from './dto/create-basket.dto';
import { AddProductDto } from './dto/add-product.dto';
import { ChangeAmountProductDto } from './dto/change-amount-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';
import { BasketProduct } from './basket-products.model';
import { GetBasketProductsDto } from './dto/get-basket-products.dto';

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket) private basketRepository: typeof Basket,
        @InjectModel(BasketProduct) private basketProductRepository: typeof BasketProduct) { }

    async getBasketProducts(dto: GetBasketProductsDto) {
        const basketProducts = await this.basketProductRepository.findAll({ where: { basketId: dto.basketId }, include: { all: true } })
        return basketProducts
    }

    async createBasket(dto: CreateBasketDto) {
        await this.basketRepository.create(dto)
    }

    async addProduct(dto: AddProductDto) {
        const basketProduct = await this.basketProductRepository.create(dto)
        return basketProduct
    }

    async removeProduct(dto: RemoveProductDto) {
        const product = await this.basketProductRepository.destroy({ where: { basketId: dto.basketId, productId: dto.productId } })
        return product
    }

    async changeAmountProduct(dto: ChangeAmountProductDto) {
        const basketProduct = await this.basketProductRepository.update({ amount: dto.amount }, { where: { basketId: dto.basketId, productId: dto.productId } })
        return basketProduct
    }
}
