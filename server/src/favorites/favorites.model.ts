import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface FavoriteCreationAttrs {
    category: object
    sale?: number
}

@Table({ tableName: 'Favorites' })
export class Favorite extends Model<Favorite, FavoriteCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    // @ForeignKey()
    @Column({ type: DataType.UUID, allowNull: false })
    userId: object;
}