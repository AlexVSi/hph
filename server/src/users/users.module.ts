import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRole } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { BannedUser } from './banned-user.model';
import { BasketsModule } from 'src/baskets/baskets.module';
import { FavoritesModule } from 'src/favorites/favorites.module';
import { LegalsEntityUser } from './legals-entity-users.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([User, Role, UserRole, BannedUser, LegalsEntityUser]),
    RolesModule,
    BasketsModule,
    FavoritesModule
  ],
  exports: [UsersService]
})
export class UsersModule { }
