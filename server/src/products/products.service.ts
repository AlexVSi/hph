import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private productRepository: typeof Product) { }

    async createProduct(dto: CreateProductDto) {
        const product = await this.productRepository.create(dto)
        return product;
    }

    async editProduct(dto: UpdateProductDto) {
        const product = await this.productRepository.findByPk(dto.id)
        await product.update(dto)
        return product
    }

    async deleteProduct(id: string) {
        return await this.productRepository.destroy({ where: { id: id } })
    }

    async getAllProduct() {
        const products = await this.productRepository.findAll({ include: { all: true } })
        return products;
    }

    async getProductById(id: string) {
        const product = await this.productRepository.findByPk(id)
        return product;
    }
}
