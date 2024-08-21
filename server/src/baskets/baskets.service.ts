import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './baskets.model';
import { CreateBasketDto } from './dto/create-basket.dto';

@Injectable()
export class BasketsService {
    constructor(@InjectModel(Basket) private basketRepository: typeof Basket) { }
    async createBasket(dto: CreateBasketDto) {
        await this.basketRepository.create(dto)
    }
}
