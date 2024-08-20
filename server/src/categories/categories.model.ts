import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface CategoryCreationAttrs {
    category: object
    sale?: number
}

@Table({ tableName: 'Categories' })
export class Category extends Model<Category, CategoryCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.JSON, allowNull: false })
    category: object;

    @Column({ type: DataType.FLOAT, allowNull: true })
    sale: number;
}