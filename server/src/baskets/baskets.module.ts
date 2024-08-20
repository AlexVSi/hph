import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';

@Module({
  providers: [BasketsService],
  controllers: [BasketsController]
})
export class BasketsModule {}
