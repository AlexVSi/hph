import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";

interface DeliveryTypeCreationAttrs {
    deliverType: object
    price: number
    description: object
}

@Table({ tableName: 'DeliveryTypes', createdAt: false, updatedAt: false })
export class DeliveryType extends Model<DeliveryType, DeliveryTypeCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.JSON, allowNull: false })
    deliverType: object;

    @Column({ type: DataType.INTEGER, allowNull: false })
    price: number

    @Column({ type: DataType.JSON, allowNull: false })
    description: object;

    @HasMany(() => Order, 'deliveryTypeId')
    orders: Order[];
}
