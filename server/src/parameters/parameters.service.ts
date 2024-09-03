import { Injectable } from '@nestjs/common';
import { Parameter } from './parameters.model';
import { InjectModel } from '@nestjs/sequelize';
import { GetAllCategoryParametersDto } from './dto/get-all-category-parameters.dto';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { DeleteParameterDto } from './dto/delete-parameter.dto';
import { SetParameterValueDto } from '../products/dto/set-parameter-value.dto';
import { ProductParameter } from './product-parameters.model';

@Injectable()
export class ParametersService {
    constructor(@InjectModel(Parameter) private parametersRepository: typeof Parameter,
                @InjectModel(ProductParameter) private productParameterRepository: typeof ProductParameter) { }

    async getAllCategoryParameters(dto: GetAllCategoryParametersDto) {
        const parameters = await this.parametersRepository.findAll({ where: { categoryId: dto.categoryId } })
        return parameters
    }

    async createParameter(dto: CreateParameterDto) {
        const parameter = await this.parametersRepository.create(dto)
        return parameter
    }

    async updateParameter(dto: UpdateParameterDto) {
        const parameter = await this.parametersRepository.findOne({ where: { id: dto.parameterId } })
        parameter.parameter = dto.parameter
        await parameter.save()
        return parameter
    }

    async deleteParameter(dto: DeleteParameterDto) {
        await this.parametersRepository.destroy({ where: { id: dto.parameterId } })
    }
}
