import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface ProductImgCreationAttrs {
    name: object
    categoryId: string
    amount: number
    price: number
    sale: number
    description: object
}

@Table({ tableName: 'ProductImgs' })
export class ProductImg extends Model<ProductImg, ProductImgCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    // @ForeignKey()
    @Column({ type: DataType.UUID, allowNull: false })
    productId: string;

    @Column({ type: DataType.BLOB, allowNull: false })
    img: string;
}