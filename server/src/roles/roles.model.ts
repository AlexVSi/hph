import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRole } from "./user-roles.model";

interface RoleCreationAttrs {
    role: string;
}

@Table({ tableName: "Roles", createdAt: false, updatedAt: false})
export class Role extends Model<Role, RoleCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    role: string;

    @BelongsToMany(() => User, () => UserRole)
    users: User[];
}