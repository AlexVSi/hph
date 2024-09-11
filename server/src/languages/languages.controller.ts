import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { AddLanguageDto } from './dto/add-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { DeleteLanguageDto } from './dto/delete-language.dto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuards } from 'src/auth/roles.guard';

@Controller('languages')
export class LanguagesController {
    constructor(private languagesService: LanguagesService) { }

    @Get('')
    getLanguage() {
        return this.languagesService.getLanguage()
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Post('/add')
    addLanguage(@Body() dto: AddLanguageDto) {
        return this.languagesService.addLanguage(dto)
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Put('update')
    updateLanguage(@Body() dto: UpdateLanguageDto) {
        return this.languagesService.updateLanguage(dto)
    }

    @Roles('Admin')
    // @UseGuards(RolesGuards)
    @Delete('/delete')
    deleteLanguage(@Body() dto: DeleteLanguageDto) {
        this.languagesService.deleteLanguage(dto)
    }
}
