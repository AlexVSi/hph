import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { Status } from 'src/statuses/statuses.model';
import { OrderProduct } from './order-products.model';
import { DeliveryType } from "src/delivery-types/delivery-types.model";
import { BasketsModule } from 'src/baskets/baskets.module';
import { DeliveryTypesModule } from 'src/delivery-types/delivery-types.module';
import { StatusesModule } from 'src/statuses/statuses.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    SequelizeModule.forFeature([Order, OrderProduct, Status, DeliveryType]),
    BasketsModule,
    DeliveryTypesModule,
    StatusesModule
  ]
})
export class OrdersModule {}
