import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Product } from "../products/products.model";
import { Parameter } from "src/parameters/parameters.model";
import { NumericProductParameter } from "./numeric-product-parameters.model";

interface ProductParameterCreationAttrs {
    productId: string
    parameterId: string
    value: string
}

@Table({ tableName: 'ProductParameters', createdAt: false, updatedAt: false })
export class ProductParameter extends Model<ProductParameter, ProductParameterCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID, allowNull: false })
    productId: string;

    @ForeignKey(() => Parameter)
    @Column({ type: DataType.UUID, allowNull: false })
    parameterId: string;

    @Column({ type: DataType.JSON, allowNull: false })
    value: string;

    @HasOne(() => NumericProductParameter)
    numericProductParameter: NumericProductParameter;
}