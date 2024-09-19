import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DeleteProductDto } from './dto/delete-product.dto';
import { SetSaleDto } from './dto/set-sale.dto';
import { SetParameterValueDto } from './dto/set-parameter-value.dto';
import { ProductImg } from './product-imgs.model';
import { Parameter } from 'src/parameters/parameters.model';
import { ProductTranslate } from './product-translate.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private productRepository: typeof Product,
                @InjectModel(ProductTranslate) private productTranslateRepository: typeof ProductTranslate) { }

    async createProduct(dto: CreateProductDto) {
        const product = await this.productRepository.create(dto)
        const productId = product.id
        for (let item of dto.informationT) {
            let languageId = item.languageId
            let nameT = item.nameT
            let descriptionT = item.descriptionT
            await this.productTranslateRepository.create({ productId, languageId, nameT, descriptionT})
        }
        return product;
    }

    async updateProduct(dto: UpdateProductDto) {
        const product = await this.productRepository.findByPk(dto.productId)
        await product.update(dto)
        const productTranslate = product.productTranslate
        for (let item of dto.informationT) {
            const product = productTranslate.find(product => product.languageId === item.languageId)
            if (product.nameT !== item.nameT || product.descriptionT !== item.descriptionT) {
                product.nameT = item.nameT
                product.descriptionT = item.descriptionT
                await product.save()
            }
        }
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
        const product = await this.productRepository.findByPk(dto.productId, { include: [ProductImg, ProductTranslate] })
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
