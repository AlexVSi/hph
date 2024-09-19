import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Language } from "src/languages/languages.model";
import { Parameter } from "./parameters.model";


interface ParameterTranslateCreationAttrs {
    languageId: string
    parameterId: string
    parameterT: string
}

@Table({ tableName: 'ParameterTranslate', createdAt: false, updatedAt: false })
export class ParameterTranslate extends Model<ParameterTranslate, ParameterTranslateCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => Language)
    @Column({ type: DataType.UUID, allowNull: false })
    languageId: string;

    @ForeignKey(() => Parameter)
    @Column({ type: DataType.UUID, allowNull: false })
    parameterId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    parameterT: string;

    @BelongsTo(() => Language)
    language: Language;

    @BelongsTo(() => Parameter)
    parameter: Parameter;
}