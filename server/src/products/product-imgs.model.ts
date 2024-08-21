import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./products.model";

interface ProductImgCreationAttrs {
    productId: string
    img: string
}

@Table({ tableName: 'ProductImgs', createdAt: false, updatedAt: false })
export class ProductImg extends Model<ProductImg, ProductImgCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID, allowNull: false })
    productId: string;

    @Column({ type: DataType.BLOB, allowNull: false })
    img: string;

    @BelongsTo(() => Product)
    product: Product;
}