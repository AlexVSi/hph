import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Language } from "src/languages/languages.model";
import { Product } from "src/products/products.model";
import { Category } from "./categories.model";

interface CategoriesTranslateCreationAttrs {
    languageId: string
    categoryId: string
    categoryT: string
}

@Table({ tableName: 'CategoriesTranslate' })
export class CategoriesTranslate extends Model<CategoriesTranslate, CategoriesTranslateCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Language)
    @Column({ type: DataType.UUID })
    languageId: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID })
    categoryId: string;

    @Column({ type: DataType.JSON, allowNull: false, unique: true })
    categoryT: string;

    @BelongsTo(() => Language)
    language: Language;

    @BelongsTo(() => Category)
    category: Category;
}
