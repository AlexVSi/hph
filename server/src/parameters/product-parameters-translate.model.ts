import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Language } from "src/languages/languages.model";
import { ProductParameter } from "./product-parameters.model";

interface ProductParametersTranslateCreationAttrs {
    languageId: string
    productParameterId: string
    valueT: string
}

@Table({ tableName: 'ProductParametersTranslate', createdAt: false, updatedAt: false })
export class ProductParametersTranslate extends Model<ProductParametersTranslate, ProductParametersTranslateCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Language)
    @Column({ type: DataType.UUID, allowNull: false })
    languageId: string;

    @ForeignKey(() => ProductParameter)
    @Column({ type: DataType.UUID, allowNull: false })
    productParameterId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    valueT: string;

    @BelongsTo(() => Language)
    language: Language;

    @BelongsTo(() => ProductParameter)
    productParameter: ProductParameter;
}