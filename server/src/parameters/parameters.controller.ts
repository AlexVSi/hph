import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { GetAllCategoryParametersDto } from './dto/get-all-category-parameters.dto';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { DeleteParameterDto } from './dto/delete-parameter.dto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuards } from 'src/auth/roles.guard';

@Controller('parameters')
export class ParametersController {
    constructor(private parametersService: ParametersService) { }

    @Get('')
    getAllCategoryParameters(@Body() dto: GetAllCategoryParametersDto) {
        return this.parametersService.getAllCategoryParameters(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Post('/create')
    createParameter(@Body() dto: CreateParameterDto) {
        return this.parametersService.createParameter(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Put('/update')
    updateParameter(@Body() dto: UpdateParameterDto) {
        return this.parametersService.updateParameter(dto)
    }

    @Roles('ADMIN')
    // @UseGuards(RolesGuards)
    @Delete('/delete')
    deleteParameter(@Body() dto: DeleteParameterDto) {
        return this.parametersService.deleteParameter(dto)
    }
}
