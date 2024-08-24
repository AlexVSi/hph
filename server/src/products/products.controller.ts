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

    @Roles('ADMIN')
    // @UseGuards(RolesGuards, UserActivatedGuard)
    @Post('/create')
    createProduct(@Body() dto: CreateProductDto) {
        return this.productsService.createProduct(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards, UserActivatedGuard)
    @Put('/edit')
    editProduct(@Body() dto: UpdateProductDto) {
        return this.productsService.editProduct(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards, UserActivatedGuard)
    @Delete('/delete')
    deleteProduct(@Body() id: string) {
        return this.productsService.deleteProduct(id)
    }

    @Get('')
    getAllProduct() {
        return this.productsService.getAllProduct()
    }
}
