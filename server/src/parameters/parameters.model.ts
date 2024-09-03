import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "src/categories/categories.model";
import { Product } from "src/products/products.model";
import { ProductParameter } from "./product-parameters.model";

interface ParameterCreationAttrs {
    categoryId: string
    parameter: object
}

@Table({ tableName: 'Parameters', createdAt: false, updatedAt: false})
export class Parameter extends Model<Parameter, ParameterCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Category)
    @Column({ type: DataType.UUID, allowNull: false })
    categoryId: string;

    @Column({ type: DataType.JSON, allowNull: false })
    parameter: object;

    @BelongsToMany(() => Product, () => ProductParameter)
    products: Product[];

    @BelongsTo(() => Category)
    category: Category;
}
