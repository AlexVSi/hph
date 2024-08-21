import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Favorite } from "./favorites.model";
import { Product } from "src/products/products.model";

interface FavoriteProductCreationAttrs {
    favoriteId: string
    productId: string
}

@Table({ tableName: 'FavoriteProducts', createdAt: false, updatedAt: false})
export class FavoriteProduct extends Model<FavoriteProduct, FavoriteProductCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Favorite)
    @Column({ type: DataType.UUID, allowNull: false })
    favoriteId: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID, allowNull: false })
    productId: string;
}
