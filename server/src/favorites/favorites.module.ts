import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Favorite } from './favorites.model';
import { FavoriteProduct } from './favorite-products.model';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [
    SequelizeModule.forFeature([Favorite, FavoriteProduct])
  ],
  exports: [
    FavoritesService
  ]
})
export class FavoritesModule {}
