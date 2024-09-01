import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { RolesGuards } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { DeleteProductDto } from './dto/delete-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) { }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Post('/create')
    createProduct(@Body() dto: CreateProductDto) {
        return this.productsService.createProduct(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Put('/update')
    editProduct(@Body() dto: UpdateProductDto) {
        return this.productsService.updateProduct(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Delete('/delete')
    deleteProduct(@Body() dto: DeleteProductDto) {
        return this.productsService.deleteProduct(dto)
    }

    @Get('')
    getAllProduct() {
        return this.productsService.getAllProducts()
    }

    
}
