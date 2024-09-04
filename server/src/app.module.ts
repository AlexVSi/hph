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
import { Parameter } from "./parameters/parameters.model";
import { Category } from "./categories/categories.model";
import { ProductParameter } from "./parameters/product-parameters.model";
import { ProductImg } from "./products/product-imgs.model";
import { Product } from "./products/products.model";
import { FavoriteProduct } from "./favorites/favorite-products.model";
import { Favorite } from "./favorites/favorites.model";
import { BasketProduct } from "./baskets/basket-products.model";
import { Basket } from "./baskets/baskets.model";
import { OrderProduct } from "./orders/order-products.model";
import { Order } from "./orders/orders.model";
import { DeliveryType } from "./orders/delivery-types.model";
import { Status } from "./orders/statuses.model";
import { LegalsEntityUser } from "./users/legals-entity-users.model";
import { DeliveryAddress } from "./users/delivery-address.model";
import { MainPageProduct } from "./products/main-page-products.model";
import { ParametersModule } from './parameters/parameters.module';


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
            models: [
                User,
                Role,
                UserRole,
                LegalsEntityUser,
                DeliveryAddress,
                BannedUser,
                Parameter,
                Category,
                ProductParameter,
                ProductImg,
                Product,
                FavoriteProduct,
                Favorite,
                BasketProduct,
                Basket,
                OrderProduct,
                Order,
                DeliveryType,
                Status,
                MainPageProduct
            ],
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
        ParametersModule,
    ]
})

export class AppModule { }
