import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./products.model";

interface MainPageProductCreationAttrs {
    productId: string
}

@Table({ tableName: 'MainPageProducts' })
export class MainPageProduct extends Model<MainPageProduct, MainPageProductCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID, allowNull: false })
    productId: string;

    @BelongsTo(() => Product)
    product: Product;
}
