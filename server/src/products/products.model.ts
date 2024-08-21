import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ProductImg } from "./product-imgs.model";
import { ProductParameter } from "./product-parameters.model";
import { Favorite } from "src/favorites/favorites.model";
import { FavoriteProduct } from "src/favorites/favorite-products.model";
import { Basket } from "src/baskets/baskets.model";
import { Parameter } from "src/categories/parameters.model";
import { Order } from "src/orders/orders.model";
import { OrderProduct } from "src/orders/order-products.model";
import { Category } from "src/categories/categories.model";
import { BasketProduct } from "src/baskets/basket-products.model";

interface ProductCreationAttrs {
    articleNumber: string
    name: object
    categoryId: string
    amount: number
    price: number
    sale: number
    description: object
}

@Table({ tableName: 'Products' })
export class Product extends Model<Product, ProductCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    articleNumber: string;

    @Column({ type: DataType.JSON, allowNull: false })
    name: object;

    @ForeignKey(() => Category)
    @Column({ type: DataType.UUID, allowNull: false })
    categoryId: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    amount: number;

    @Column({ type: DataType.FLOAT, allowNull: false })
    price: number;

    @Column({ type: DataType.FLOAT, allowNull: true })
    sale: number;

    @Column({ type: DataType.JSON, allowNull: false })
    description: object;

    @HasMany(() => ProductImg, 'productId')
    productImg: ProductImg;

    @BelongsToMany(() => Order, () => OrderProduct)
    order: Order[];

    @BelongsToMany(() => Favorite, () => FavoriteProduct)
    favorite: Favorite[];

    @BelongsToMany(() => Basket, () => BasketProduct)
    basket: Basket[];

    @BelongsToMany(() => Parameter, () => ProductParameter)
    parameter: Parameter[];
}