import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { RolesGuards } from 'src/auth/roles.guard';
import { UserActivatedGuard } from 'src/users/user-activated.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) { }

    @Post('/create')
    @Roles('ADMIN')
    @UseGuards(RolesGuards, UserActivatedGuard)
    createProduct(@Body() dto: CreateProductDto) {
        return this.productsService.createProduct(dto)
    }

    @Put('/edit')
    @Roles('ADMIN')
    @UseGuards(RolesGuards, UserActivatedGuard)
    editProduct(@Body() dto: UpdateProductDto) {
        return this.productsService.editProduct(dto)
    }

    @Delete('/delete')
    @Roles('ADMIN')
    @UseGuards(RolesGuards, UserActivatedGuard)
    deleteProduct(@Body() id: string) {
        return this.productsService.deleteProduct(id)
    }

    @Get('')
    getAllProduct() {
        return this.productsService.getAllProduct()
    }
}
