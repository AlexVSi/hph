import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersController } from './parameters.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Parameter } from './parameters.model';
import { ProductParameter } from './product-parameters.model';
import { ParameterTranslate } from './parameters-translate.model';
import { NumericProductParameter } from './numeric-product-parameters.model';
import { ProductParametersTranslate } from './product-parameters-translate.model';

@Module({
  providers: [ParametersService],
  controllers: [ParametersController],
  imports: [
    SequelizeModule.forFeature([Parameter, ProductParameter, ParameterTranslate, NumericProductParameter, ProductParametersTranslate])
  ],
  exports: [
    ParametersService
  ]
})
export class ParametersModule {}
