import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './baskets.model';
import { BasketProduct } from './basket-products.model';

@Module({
  providers: [BasketsService],
  controllers: [BasketsController],
  imports: [
    SequelizeModule.forFeature([Basket, BasketProduct])
  ]
})
export class BasketsModule {}
