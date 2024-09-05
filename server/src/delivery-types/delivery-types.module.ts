import { Module } from '@nestjs/common';
import { DeliveryTypesService } from './delivery-types.service';
import { DeliveryTypesController } from './delivery-types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeliveryType } from './delivery-types.model';

@Module({
  providers: [DeliveryTypesService],
  controllers: [DeliveryTypesController],
  imports: [
    SequelizeModule.forFeature([DeliveryType])
  ]
})
export class DeliveryTypesModule {}
