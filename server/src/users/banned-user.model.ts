import { Model, BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { User } from "./users.model";

interface BannedUserCreationAttrs {
    userId: string
    banReason: string
}

@Table({ tableName: 'BannedUsers' })
export class BannedUser extends Model<BannedUser, BannedUserCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, allowNull: false })
    userId: string

    @Column({ type: DataType.STRING, allowNull: false })
    banReason: string

    @BelongsTo(() => User)
    user: User;
}