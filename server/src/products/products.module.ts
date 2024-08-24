import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { ProductImg } from './product-imgs.model';
import { ProductParameter } from './product-parameters.model';
import { MainPageProduct } from './main-page-products.model';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    SequelizeModule.forFeature([Product, ProductImg, ProductParameter, MainPageProduct])
  ]
})
export class ProductsModule { }
