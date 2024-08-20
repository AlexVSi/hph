import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface DeliveryAddressCreationAttrs {
    categoryId: string
    parametr: object
}

@Table({ tableName: 'DeliveryAddress' })
export class DeliveryAddress extends Model<DeliveryAddress, DeliveryAddressCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.UUID, allowNull: false })
    categoryId: string;

    @Column({ type: DataType.JSON, allowNull: false })
    parametr: object;
}