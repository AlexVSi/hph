import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
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

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Post('create')
    createCategory(@Body() dto: CreateCategoryDto) {
        return this.categoriesService.createCategory(dto)
    }

    // @UseGuards(RolesGuards)
    @Get('')
    getAllCategories() {
        return this.categoriesService.getAllCategories()
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Put('/update')
    async updateCategory(@Body() dto: UpdateCategoryDto) {
        return this.categoriesService.updateCategory(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Delete('/delete')
    async deleteCategory(@Body() dto: DeleteCategoryDto) {
        return this.categoriesService.deleteCategory(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Post('/set-sale')
    async setSale(@Body() dto: SetSaleDto) {
        return this.categoriesService.setSale(dto)
    }
}
