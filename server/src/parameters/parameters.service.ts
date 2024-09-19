import { Injectable } from '@nestjs/common';
import { Parameter } from './parameters.model';
import { InjectModel } from '@nestjs/sequelize';
import { GetAllCategoryParametersDto } from './dto/get-all-category-parameters.dto';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { DeleteParameterDto } from './dto/delete-parameter.dto';
import { SetParameterValueDto } from '../products/dto/set-parameter-value.dto';
import { ProductParameter } from './product-parameters.model';
import { ParameterTranslate } from './parameters-translate.model';

@Injectable()
export class ParametersService {
    constructor(@InjectModel(Parameter) private parametersRepository: typeof Parameter,
        @InjectModel(ParameterTranslate) private parameterTranslateRepository: typeof ParameterTranslate) { }

    async getAllCategoryParameters(dto: GetAllCategoryParametersDto) {
        const parameters = await this.parametersRepository.findAll({ where: { categoryId: dto.categoryId }, include: [ParameterTranslate] })
        return parameters
    }

    async createParameter(dto: CreateParameterDto) {
        const parameter = await this.parametersRepository.create(dto)
        const parameterId = parameter.id
        for (let item of dto.parameterT) {
            let languageId = item.languageId
            let parameterT = item.translanion
            await this.parameterTranslateRepository.create({ parameterId, languageId, parameterT })
        }
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
