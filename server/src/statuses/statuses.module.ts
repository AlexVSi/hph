import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './statuses.model';

@Module({
  providers: [StatusesService],
  controllers: [StatusesController],
  imports: [
    SequelizeModule.forFeature([Status])
  ],
  exports: [
    StatusesService
  ]
})
export class StatusesModule {}
