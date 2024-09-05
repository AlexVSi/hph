import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';

@Module({
  providers: [StatusesService],
  controllers: [StatusesController]
})
export class StatusesModule {}
