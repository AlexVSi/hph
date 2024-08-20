import { Module } from '@nestjs/common';
import { LegalsEntityUsersController } from './legals-entity-users.controller';
import { LegalsEntityUsersService } from './legals-entity-users.service';

@Module({
  controllers: [LegalsEntityUsersController],
  providers: [LegalsEntityUsersService]
})
export class LegalsEntityUsersModule {}
