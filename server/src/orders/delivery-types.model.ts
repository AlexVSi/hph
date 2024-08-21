import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "./orders.model";

interface DeliveryTypeCreationAttrs {
    deliverType: object
}

@Table({ tableName: 'DeliveryTypes', createdAt: false, updatedAt: false })
export class DeliveryType extends Model<DeliveryType, DeliveryTypeCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.JSON, allowNull: false })
    deliverType: object;

    @HasMany(() => Order, 'deliveryTypeId')
    order: Order[];
}
