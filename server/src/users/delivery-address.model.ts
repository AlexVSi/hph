import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface DeliveryAddressCreationAttrs {
    userId: string
    index: string
    city: string
    street: string
    houseNumber: string
    note: string
}

@Table({ tableName: 'DeliveryAddress', createdAt: false, updatedAt: false })
export class DeliveryAddress extends Model<DeliveryAddress, DeliveryAddressCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, allowNull: false })
    userId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    index: string;

    @Column({ type: DataType.STRING, allowNull: false })
    city: string;

    @Column({ type: DataType.STRING, allowNull: false })
    street: string;

    @Column({ type: DataType.STRING, allowNull: false })
    houseNumber: string;

    @Column({ type: DataType.STRING, allowNull: false })
    note: string;

    @BelongsTo(() => User)
    user: User;
}
