import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Parameter } from "src/parameters/parameters.model";
import { Product } from "src/products/products.model";
import { CategoriesTranslate } from "./categories-translate.model";

interface CategoryCreationAttrs {
    sale?: number
}

@Table({ tableName: 'Categories', createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0 })
    sale?: number;

    @HasMany(() => Product, 'categoryId')
    products: Product[];

    @HasMany(() => Parameter, 'categoryId')
    parameters: Parameter[];

    @HasMany(() => CategoriesTranslate)
    categoriesTranslate: CategoriesTranslate[];
}
