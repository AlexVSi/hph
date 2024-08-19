import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/user-roles.model";
import { BannedUser } from "./banned-user.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: "Users" })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'user id'})
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    firstname: string;

    @Column({ type: DataType.STRING, allowNull: false })
    lastname: string;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @Column({ type: DataType.FLOAT, allowNull: true })
    personalSale: number;

    @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false })
    isActivated: boolean;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    activationLink: string;

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];

    @HasOne(() => BannedUser, 'userId')
    bannedUser: BannedUser;
}