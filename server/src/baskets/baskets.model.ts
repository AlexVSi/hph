import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { BasketProduct } from "./basket-products.model";
import { User } from "src/users/users.model";
import { Product } from "src/products/products.model";

interface BasketCreationAttrs {
    userId: string
}

@Table({ tableName: 'Baskets', createdAt: false, updatedAt: false })
export class Basket extends Model<Basket, BasketCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, allowNull: false })
    userId: string;

    @BelongsToMany(() => Product, () => BasketProduct)
    products: Product[];

    @BelongsTo(() => User)
    user: User;
}
