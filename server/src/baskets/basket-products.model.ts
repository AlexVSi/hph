import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Basket } from "./baskets.model";
import { Product } from "src/products/products.model";

interface BasketProductCreationAttrs {
    basketId: string
    productId: string
    amount: number
}

@Table({ tableName: 'BasketProducts', createdAt: false, updatedAt: false })
export class BasketProduct extends Model<BasketProduct, BasketProductCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Basket)
    @Column({ type: DataType.UUID, allowNull: false })
    basketId: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID, allowNull: false })
    productId: string;

    @Column({ type: DataType.NUMBER, allowNull: false })
    amount: number;
}
