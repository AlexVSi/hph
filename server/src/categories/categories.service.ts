import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category) { }

    async createCategory(dto: CreateCategoryDto) {
        const category = await this.categoryRepository.create(dto)
        return category
    }

    async getAllCategories() {
        const categories = await this.categoryRepository.findAll({ include: { all: true } })
        return categories
    }
}
