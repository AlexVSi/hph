import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";

interface StatusCreationAttrs {
    status: object
}

@Table({tableName: 'Statuses', createdAt: false, updatedAt: false })
export class Status extends Model<Status, StatusCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.JSON, allowNull: false })
    status: object;

    @HasMany(() => Order, 'statusId')
    orders: Order[];
}