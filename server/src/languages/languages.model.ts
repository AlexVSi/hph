import { Model, Column, DataType, Table } from "sequelize-typescript";

interface LanguageCreationAttrs {
    language: string
    languageCode: string
}

@Table({ tableName: 'Languages', createdAt: false, updatedAt: false })
export class Language extends Model<Language, LanguageCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    language: string;

    @Column({ type: DataType.STRING, allowNull: false })
    languageCode: string;
}