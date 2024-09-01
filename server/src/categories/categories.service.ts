import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';
import { SetSaleDto } from './dto/set-sale.dto';

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

    async updateCategory(dto: UpdateCategoryDto) {
        const category = await this.categoryRepository.findByPk(dto.categoryId)
        category.category = dto.category
        await category.save()
        return category
    }

    async deleteCategory(dto: DeleteCategoryDto) {
        await this.categoryRepository.destroy({ where: { id: dto.categoryId } })
    }

    async setSale(dto: SetSaleDto) {
        const category = await this.categoryRepository.findByPk(dto.categoryId)
        category.sale = dto.sale
        await category.save()
        return category
    }
}
