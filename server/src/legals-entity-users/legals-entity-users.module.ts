import { Module } from '@nestjs/common';
import { LegalsEntityUsersController } from './legals-entity-users.controller';
import { LegalsEntityUsersService } from './legals-entity-users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { LegalsEntityUser } from './legals-entity-users.model';

@Module({
  controllers: [LegalsEntityUsersController],
  providers: [LegalsEntityUsersService],
  imports: [
    SequelizeModule.forFeature([LegalsEntityUser])
  ]
})
export class LegalsEntityUsersModule {}
