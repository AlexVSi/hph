import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Favorite } from './favorites.model';

@Injectable()
export class FavoritesService {
    constructor(@InjectModel(Favorite) private favoriteRepository: typeof Favorite) {}
    async createFavorite(dto: CreateFavoriteDto) {
        await this.favoriteRepository.create(dto)
    }
}
