import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DeleteProductDto } from './dto/delete-product.dto';
import { SetSaleDto } from './dto/set-sale.dto';
import { SetParameterValueDto } from './dto/set-parameter-value.dto';
import { ParametersService } from 'src/parameters/parameters.service';
import { ProductImg } from './product-imgs.model';
import { Parameter } from 'src/parameters/parameters.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private productRepository: typeof Product,
                private parametersService: ParametersService) { }

    async createProduct(dto: CreateProductDto) {
        const product = await this.productRepository.create(dto)
        return product;
    }

    async updateProduct(dto: UpdateProductDto) {
        const product = await this.productRepository.findByPk(dto.productId)
        await product.update(dto)
        return product
    }

    async deleteProduct(dto: DeleteProductDto) {
        return await this.productRepository.destroy({ where: { id: dto.productId } })
    }

    async getAllProducts() {
        const products = await this.productRepository.findAll({ include: [ProductImg, Parameter] })
        return products
    }

    async getProductById(id: string) {
        const product = await this.productRepository.findByPk(id)
        return product;
    }

    async setSale(dto: SetSaleDto) {
        const product = await this.productRepository.findByPk(dto.productId)
        product.sale = dto.sale
        await product.save()
        return product
    }

    async setProductParameterValue(dto: SetParameterValueDto) {
        const product = await this.productRepository.findByPk(dto.productId, { include: [Parameter] })
        await product.$add('parameters', [dto.parameterId], { through: { value: dto.value } })
        return product
    }
}
