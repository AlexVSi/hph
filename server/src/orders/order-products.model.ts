import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "./orders.model";
import { Product } from "src/products/products.model";

interface OrderProductCreationAttrs {
    orderId: string
    productId: string
    amount: number
}

@Table({ tableName: 'OrderProducts', createdAt: false, updatedAt: false })
export class OrderProduct extends Model<OrderProduct, OrderProductCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Order)
    @Column({ type: DataType.UUID, allowNull: false })
    orderId: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID, allowNull: false })
    productId: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    amount: number;
}
