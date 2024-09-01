import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuards } from 'src/auth/roles.guard';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';
import { SetSaleDto } from './dto/set-sale.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }

    @Post('create')
    @Roles('ADMIN')
    createCategory(@Body() dto: CreateCategoryDto) {
        return this.categoriesService.createCategory(dto)
    }

    @Get()
    getAllCategories() {
        return this.categoriesService.getAllCategories()
    }

    async updateCategory(dto: UpdateCategoryDto) {
        return this.categoriesService.updateCategory(dto)
    }

    async deleteCategory(dto: DeleteCategoryDto) {
        return this.categoriesService.deleteCategory(dto)
    }

    async setSale(dto: SetSaleDto) {
        return this.categoriesService.setSale(dto)
    }
}
