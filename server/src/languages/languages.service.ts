import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './languages.model';
import { AddLanguageDto } from './dto/add-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { DeleteLanguageDto } from './dto/delete-language.dto';

@Injectable()
export class LanguagesService {
    constructor(@InjectModel(Language) private languageRepository: typeof Language) { }

    async getLanguage() {
        const languages = await this.languageRepository.findAll()
        return languages
    }

    async addLanguage(dto: AddLanguageDto) {
        const language = await this.languageRepository.create(dto)
        return language
    }

    async updateLanguage(dto: UpdateLanguageDto) {
        const language = await this.languageRepository.findByPk(dto.languageId)
        language.update(dto)
        await language.save()
        return language
    }

    async deleteLanguage(dto: DeleteLanguageDto) {
        await this.languageRepository.destroy({ where: { id: dto.languageId } })
    }
}
