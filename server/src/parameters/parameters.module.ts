import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersController } from './parameters.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Parameter } from './parameters.model';
import { ProductParameter } from './product-parameters.model';

@Module({
  providers: [ParametersService],
  controllers: [ParametersController],
  imports: [
    SequelizeModule.forFeature([Parameter, ProductParameter])
  ],
  exports: [
    ParametersService
  ]
})
export class ParametersModule {}
