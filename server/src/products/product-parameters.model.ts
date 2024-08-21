import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./products.model";
import { Parameter } from "src/categories/parameters.model";

interface ProductParameterCreationAttrs {
    productId: string
    parameterId: string
    value: object
}


@Table({ tableName: 'ProductParameters' })
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
    value: object;
}