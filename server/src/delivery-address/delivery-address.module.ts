import { Module } from '@nestjs/common';
import { DeliveryAddressController } from './delivery-address.controller';
import { DeliveryAddressService } from './delivery-address.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeliveryAddress } from './delivery-address.model';

@Module({
  controllers: [DeliveryAddressController],
  providers: [DeliveryAddressService],
  imports: [
    SequelizeModule.forFeature([DeliveryAddress])
  ]
})
export class DeliveryAddressModule {}
