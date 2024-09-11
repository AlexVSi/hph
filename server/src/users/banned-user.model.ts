import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "./users.model";

interface BannedUserCreationAttrs {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    password: string;
}

@Table({ tableName: "BannedUsers" })
export class BannedUser extends Model<BannedUser, BannedUserCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID, allowNull: false })
    userId: string;

    @Column({ type: DataType.STRING, allowNull: false })
    banReason: string;

    @BelongsTo(() => User)
    user: User;
}