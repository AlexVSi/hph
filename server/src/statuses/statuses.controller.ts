import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuards } from 'src/auth/roles.guard';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { DeleteStatusDto } from './dto/delete-status.dto';

@Controller('statuses')
export class StatusesController {
    constructor(private statusesService: StatusesService) { }

    @Get('')
    getStatuses() {
        return this.statusesService.getStatuses()
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Post('/create')
    createStatus(@Body() dto: CreateStatusDto) {
        return this.statusesService.createStatus(dto)
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Put('/update')
    updateStatus(@Body() dto: UpdateStatusDto) {
        return this.statusesService.updateStatus(dto)
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Delete('/delete')
    deleteStatus(@Body() dto: DeleteStatusDto) {
        this.statusesService.deleteStatus(dto)
    }
}
