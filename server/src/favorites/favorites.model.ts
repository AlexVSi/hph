import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { FavoriteProduct } from "./favorite-products.model";
import { User } from "src/users/users.model";
import { Product } from "src/products/products.model";

interface FavoriteCreationAttrs {
    userId: string
}

@Table({ tableName: 'Favorites', createdAt: false, updatedAt: false })
export class Favorite extends Model<Favorite, FavoriteCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, allowNull: false })
    userId: string;

    @BelongsToMany(() => Product, () => FavoriteProduct)
    products: Product[];

    @BelongsTo(() => User)
    user: User;
}
