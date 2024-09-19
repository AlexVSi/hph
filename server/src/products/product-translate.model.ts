import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "./products.model";
import { Language } from "src/languages/languages.model";

interface ProductTranslateCreationAttrs {
    languageId: string
    productId: string
    nameT: string
    descriptionT: string
}

@Table({ tableName: 'ProductTranslate' })
export class ProductTranslate extends Model<ProductTranslate, ProductTranslateCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Language)
    @Column({ type: DataType.UUID })
    languageId: string;

    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID })
    productId: string;

    @Column({ type: DataType.JSON, allowNull: false })
    nameT: string;

    @Column({ type: DataType.JSON, allowNull: false })
    descriptionT: string;

    @BelongsTo(() => Language)
    language: Language;

    @BelongsTo(() => Product)
    product: Product;
}