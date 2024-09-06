import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { DeliveryTypesService } from './delivery-types.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuards } from 'src/auth/roles.guard';
import { CreateDeliveryTypeDto } from './dto/create-delivery-type.dto';
import { UpdateDeliveryTypeDto } from './dto/update-delivery-type.dto';
import { DeleteDeliveryTypeDto } from './dto/delete-delivery-type.dto';

@Controller('delivery-types')
export class DeliveryTypesController {
    constructor(private deliveryTypesService: DeliveryTypesService) { }

    @Get('')
    getDeliveryTypes() {
        return this.deliveryTypesService.getDeliveryTypes()
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Post('/create')
    createDeliveryType(@Body() dto: CreateDeliveryTypeDto) {
        return this.deliveryTypesService.createDeliveryType(dto)
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Put('/update')
    updateDeliveryType(@Body() dto: UpdateDeliveryTypeDto) {
        return this.deliveryTypesService.updateDeliveryType(dto)
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Delete('/delete')
    deleteDeliveryType(@Body() dto: DeleteDeliveryTypeDto) {
        this.deliveryTypesService.deleteDeliveryType(dto)
    }
}
