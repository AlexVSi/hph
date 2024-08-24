import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './baskets.model';
import { CreateBasketDto } from './dto/create-basket.dto';
import { AddProductDto } from './dto/add-product.dto';
import { RemoweProductDto } from './dto/remowe-product.dto';
import { ChangeAmountDto } from './dto/change-amount.dto';

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket) private basketRepository: typeof Basket) { }

    async createBasket(dto: CreateBasketDto) {
        await this.basketRepository.create(dto)
    }

    async addProduct(dto: AddProductDto) {
        const basket = await this.basketRepository.findByPk(dto.basketId)
        await basket.$add('products', [dto.productId])
        return basket
    }

    async removeProduct(dto: RemoweProductDto) { }

    async changeAmount(dto: ChangeAmountDto) { }


}
