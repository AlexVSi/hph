import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface LegalsEntityUserCreationAttrs {
    userId: string
    fescCode: string
    VATCode: string
    legalAddress: string
}

@Table({ tableName: 'LegalsEntityUsers', createdAt: false, updatedAt: false })
export class LegalsEntityUser extends Model<LegalsEntityUser, LegalsEntityUserCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, allowNull: false })
    userId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    fescCode: string;

    @Column({ type: DataType.STRING, allowNull: false })
    VATCode: string;

    @Column({ type: DataType.STRING, allowNull: false })
    legalAddress: string;

    @BelongsTo(() => User)
    user: User;
}