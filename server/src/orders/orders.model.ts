import { Column, DataType, Model } from "sequelize-typescript";

interface OrderCreationAttrs {
    userId: string
    totalPrise: number
    deliveryTypeId: string
}

export class Order extends Model<Order, OrderCreationAttrs> {
    @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true})
    id: string;

    // @ForeignKey()
    @Column({type: DataType.UUID, allowNull: false})
    userId: string;

    @Column({type: DataType.FLOAT, allowNull: false})
    totalPrise: number;

    // @ForeignKey()
    @Column({type: DataType.UUID, allowNull: false})
    deliveryTypeId: string;

    // @ForeignKey()
    @Column({type: DataType.UUID, allowNull: false})
    statusId: string;

    // createdAt: date

}