import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { ProductParameter } from "./product-parameters.model";


interface NumericProductParameterCreationAttrs {
    productParameterId: string
    value: number
}

@Table({ tableName: 'NumericProductParameters' })
export class NumericProductParameter extends Model<NumericProductParameter, NumericProductParameterCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => ProductParameter)
    @Column({ type: DataType.UUID, allowNull: false })
    productParameterId: string;

    @Column({ type: DataType.NUMBER, allowNull: false })
    value: number;

    @BelongsTo(() => ProductParameter)
    productParameter: ProductParameter;
}