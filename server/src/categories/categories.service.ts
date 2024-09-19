import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';
import { SetSaleDto } from './dto/set-sale.dto';
import { CategoriesTranslate } from './categories-translate.model';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category,
                @InjectModel(CategoriesTranslate) private categoriesTranslateRepository: typeof CategoriesTranslate) { }

    async createCategory(dto: CreateCategoryDto) {
        const category = await this.categoryRepository.create(dto.sale)
        const categoryId = category.id
        for (let item of dto.categoryT) {
            let languageId = item.languageId
            let categoryT = item.translanion
            await this.categoriesTranslateRepository.create({ categoryId, languageId, categoryT })
        }
        return await category, category.$get('categoriesTranslate')
    }

    async getAllCategories() {
        const categories = await this.categoryRepository.findAll({ include: [CategoriesTranslate] })
        return categories
    }

    async updateCategory(dto: UpdateCategoryDto) {
        const categoryTranslate = await this.categoriesTranslateRepository.findAll({ where: { categoryId: dto.categoryId } })
        for (let item of dto.categoryT) {
            const category = categoryTranslate.find(category => category.languageId === item.languageId)
            if (category.categoryT !== item.translanion) {
                category.categoryT = item.translanion
                await category.save()
            }
        }
        return categoryTranslate
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
