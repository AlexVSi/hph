import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRole } from "./roles/user-roles.model";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from "@nestjs/jwt";
import { BannedUser } from "./users/banned-user.model";
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { BasketsModule } from './baskets/baskets.module';
import { FavoritesModule } from './favorites/favorites.module';
import { LegalsEntityUsersModule } from './legals-entity-users/legals-entity-users.module';
import { DeliveryAddressModule } from './delivery-address/delivery-address.module';


@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRole, BannedUser],
            autoLoadModels: true,
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        JwtModule,
        ProductsModule,
        OrdersModule,
        CategoriesModule,
        BasketsModule,
        FavoritesModule,
        LegalsEntityUsersModule,
        DeliveryAddressModule
    ]
})

export class AppModule {

}
