import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './languages.model';

@Module({
  providers: [LanguagesService],
  controllers: [LanguagesController],
  imports: [
    SequelizeModule.forFeature([Language])
  ]
})
export class LanguagesModule {}
