import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/user-roles.model";
import { BannedUser } from "./banned-user.model";
import { LegalsEntityUser } from "src/users/legals-entity-users.model";
import { DeliveryAddress } from "src/users/delivery-address.model";
import { Basket } from "src/baskets/baskets.model";
import { Favorite } from "src/favorites/favorites.model";
import { Order } from "src/orders/orders.model";

interface UserCreationAttrs {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
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

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    phoneNumber: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @Column({ type: DataType.FLOAT, allowNull: true })
    personalSale: number;

    @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false })
    isActivated: boolean;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    activationLink: string;

    @HasMany(() => Order, 'userId')
    orders: Order[];

    @HasOne(() => BannedUser, 'userId')
    bannedUser: BannedUser;

    @HasOne(() => Basket, 'userId')
    basket: Basket;

    @HasOne(() => Favorite, 'userId')
    favorite: Favorite;

    @HasOne(() => DeliveryAddress, 'userId')
    deliveryAddress: DeliveryAddress;

    @HasOne(() => LegalsEntityUser, 'userId')
    legalsEntityUser: LegalsEntityUser;

    @BelongsToMany(() => Role, () => UserRole)
    roles: Role[];
}