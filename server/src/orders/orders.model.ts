import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { OrderProduct } from "./order-products.model";
import { DeliveryType } from "./delivery-types.model";
import { Status } from "./statuses.model";
import { User } from "src/users/users.model";
import { Product } from "src/products/products.model";

interface OrderCreationAttrs {
    userId: string
    totalPrise: number
    deliveryTypeId: string
}

@Table({ tableName: 'Orders' })
export class Order extends Model<Order, OrderCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, allowNull: false })
    userId: string;

    @Column({ type: DataType.FLOAT, allowNull: false })
    totalPrise: number;

    @ForeignKey(() => DeliveryType)
    @Column({ type: DataType.UUID, allowNull: false })
    deliveryTypeId: string;

    @ForeignKey(() => Status)
    @Column({ type: DataType.UUID, allowNull: false })
    statusId: string;

    // createdAt: date

    @BelongsToMany(() => Product, () => OrderProduct)
    product: Product[];

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => DeliveryType)
    deliveryType: DeliveryType;

    @BelongsTo(() => Status)
    status: Status;
}