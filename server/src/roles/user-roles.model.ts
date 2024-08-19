import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "./roles.model";
import { User } from "src/users/users.model";

interface RoleCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: "UserRoles", createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole, RoleCreationAttrs> {
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    userId: string

    @ForeignKey(() => Role)
    @Column({ type: DataType.UUID })
    roleId: string
}