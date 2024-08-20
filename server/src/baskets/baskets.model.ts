import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface BasketCreationAttrs {
    category: object
    sale?: number
}

@Table({ tableName: 'Baskets' })
export class Basket extends Model<Basket, BasketCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    // @ForeignKey()
    @Column({ type: DataType.UUID, allowNull: false })
    userId: object;
}