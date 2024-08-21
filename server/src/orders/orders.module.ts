import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { Status } from './statuses.model';
import { OrderProduct } from './order-products.model';
import { DeliveryType } from './delivery-types.model';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    SequelizeModule.forFeature([Order, OrderProduct, Status, DeliveryType])
  ]
})
export class OrdersModule {}
