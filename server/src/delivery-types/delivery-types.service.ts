import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryType } from './delivery-types.model';
import { CreateDeliveryTypeDto } from './dto/create-delivery-type.dto';
import { UpdateDeliveryTypeDto } from './dto/update-delivery-type.dto';
import { DeleteDeliveryTypeDto } from './dto/delete-delivery-type.dto';

@Injectable()
export class DeliveryTypesService {
    constructor(@InjectModel(DeliveryType) private deliveryTypeRepository: typeof DeliveryType) { }

    async getDeliveryTypes() {
        const deliveryTypes = await this.deliveryTypeRepository.findAll()
        return deliveryTypes
    }

    async createDeliveryType(dto: CreateDeliveryTypeDto) {
        const deliveryType = await this.deliveryTypeRepository.create(dto)
        return deliveryType
    }

    async updateDeliveryType(dto: UpdateDeliveryTypeDto) {
        const deliveryType = await this.deliveryTypeRepository.findByPk(dto.deliveryTypeId)
        await deliveryType.update(dto)
        return deliveryType
    }

    async deleteDeliveryType(dto: DeleteDeliveryTypeDto) {
        await this.deliveryTypeRepository.destroy({ where: { id: dto.deliveryTypeId } })
    }
}
