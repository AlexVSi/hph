import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category } from './categories.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [
    SequelizeModule.forFeature([Category])
  ]
})
export class CategoriesModule {}
