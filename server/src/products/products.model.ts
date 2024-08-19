import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface ProductCreationAttrs {
    name: object
    categoryId: string
    amount: number
    price: number
    sale: number
    description: object
}

@Table({tableName: 'Products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, unique: true, primaryKey: true})
    id: string;

    @Column({type: DataType.JSON, allowNull: false})
    name: object;

    // @ForeignKey()
    @Column({type: DataType.UUID, allowNull: false})
    categoryId: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    amount: number;

    @Column({type: DataType.FLOAT, allowNull: false})
    price: number;

    @Column({type: DataType.FLOAT, allowNull: true})
    sale: number;

    @Column({type: DataType.JSON, allowNull: false})
    description: object
}