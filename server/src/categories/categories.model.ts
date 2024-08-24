import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Parameter } from "./parameters.model";
import { Product } from "src/products/products.model";

interface CategoryCreationAttrs {
    category: object
    sale?: number
}

@Table({ tableName: 'Categories', createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.JSON, allowNull: false, unique: true })
    category: object;

    @Column({ type: DataType.FLOAT, allowNull: true })
    sale: number;

    @HasMany(() => Product, 'categoryId')
    products: Product[];

    @HasMany(() => Parameter, 'categoryId')
    parameters: Parameter[];
}
