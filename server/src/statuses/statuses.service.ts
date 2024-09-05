import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './statuses.model';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { DeleteStatusDto } from './dto/delete-status.dto';

@Injectable()
export class StatusesService {
    constructor(@InjectModel(Status) private statusRepository: typeof Status) { }

    async getStatuses() {
        const statuses = await this.statusRepository.findAll()
        return statuses
    }

    async createStatus(dto: CreateStatusDto) {
        const status = await this.statusRepository.create(dto)
        return status
    }

    async updateStatus(dto: UpdateStatusDto) {
        const status = await this.statusRepository.findByPk(dto.statusId)
        await status.update(dto)
        return status
    }

    async deleteStatus(dto: DeleteStatusDto) {
        await this.statusRepository.destroy({ where: { id: dto.statusId } })
    }

    async getStatus(status: string) {
        const statusId = await this.statusRepository.findOne({ where: { status: status } })
        return statusId.id
    }
}
