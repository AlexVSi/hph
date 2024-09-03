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

    async createBasket(dto: CreateBasketDto) {
        await this.basketRepository.create(dto)
    }

    async getBasketProducts(dto: GetBasketProductsDto) {
        const basketProducts = await this.basketRepository.findByPk(dto.basketId, { include: { all: true } })
        return basketProducts
    }

    async addProduct(dto: AddProductDto) {
        const basket = await this.basketRepository.findByPk(dto.basketId)
        await basket.$add('products', [dto.productId], { through: { amount: dto.amount } })
        return basket.products
    }

    async removeProduct(dto: RemoveProductDto) {
        const basket = await this.basketRepository.findByPk(dto.basketId)
        await basket.$remove('products', [dto.productId])
    }

    async changeAmountProduct(dto: ChangeAmountProductDto) {
        const basketProduct = await this.basketProductRepository.findOne({ where: { basketId: dto.basketId, productId: dto.productId } })
        basketProduct.amount = dto.amount
        basketProduct.save()
        return basketProduct
    }
}
