const sequelize = require("../db");
const {DataTypes} = require('sequelize')

const Product = sequelize.define('Product', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	name: {type: DataTypes.STRING, allowNull: false},
	// category_id: {type: DataTypes.INTEGER, allowNull: false},
	amount: {type: DataTypes.INTEGER, allowNull: false},
	price: {type: DataTypes.FLOAT, allowNull: false},
	img: {type: DataTypes.BLOB, allowNull: false},
	sale: {type: DataTypes.FLOAT, allowNull: false},
	description: {type: DataTypes.TEXT, allowNull: false},
})

const Parametrs = sequelize.define('Parametrs', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	// product_id: {type: DataTypes.INTEGER, allowNull: false},
	key: {type: DataTypes.STRING, allowNull: false},
	value: {type: DataTypes.STRING, allowNull: false},
})

const Categories = sequelize.define('Categories', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	category: {type: DataTypes.STRING, allowNull: false},
})

const Users = sequelize.define('Users', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	name: {type: DataTypes.STRING, allowNull: false},
	firstname: {type: DataTypes.STRING, allowNull: false},
	email: {type: DataTypes.STRING, allowNull: false},
	role: {type: DataTypes.STRING, allowNull: false},
	login: {type: DataTypes.STRING, allowNull: false},
	password: {type: DataTypes.STRING, allowNull: false},
	personal_sale: {type: DataTypes.FLOAT, allowNull: false},
})

const Roles = sequelize.define('Roles', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	role: {type: DataTypes.STRING, allowNull: false}
})

const BasketProduct = sequelize.define('BasketProduct', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	// basket_id: {type: DataTypes.INTEGER, allowNull: false},
	// product_id: {type: DataTypes.INTEGER, allowNull: false},
	amount: {type: DataTypes.INTEGER, allowNull: false},
})

const Basket = sequelize.define('Basket', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	// User_id: {type: DataTypes.INTEGER, allowNull: false},
})

const Orders = sequelize.define('Orders', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	// User_id: {type: DataTypes.INTEGER, allowNull: false},
	total_price: {type: DataTypes.FLOAT, allowNull: false},
	delivery_type: {type: DataTypes.BOOLEAN, allowNull: false},
	status: {type: DataTypes.BOOLEAN, allowNull: false},
	date_of_create: {type: DataTypes.DATEONLY, allowNull: false}
})

const ProductOrders = sequelize.define('ProductOrders', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	// order_id: {type: DataTypes.INTEGER, allowNull: false},
	// product_id: {type: DataTypes.INTEGER, allowNull: false},
	amount: {type: DataTypes.INTEGER, allowNull: false},
})

const Delivery = sequelize.define('Delivery', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	// order_id: {type: DataTypes.INTEGER, allowNull: false},
	index: {type: DataTypes.STRING, allowNull: false},
	city: {type: DataTypes.STRING, allowNull: false},
	street: {type: DataTypes.STRING, allowNull: false},
	house_number: {type: DataTypes.STRING, allowNull: false},
	apartment: {type: DataTypes.STRING, allowNull: false},
})

Product.hasMany(Parametrs)
Parametrs.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(ProductOrders)
ProductOrders.belongsTo(Product)

Categories.hasMany(Product)
Product.belongsTo(Categories)

Orders.hasMany(ProductOrders)
ProductOrders.belongsTo(Orders)

Orders.hasOne(Delivery)
Delivery.belongsTo(Orders)

Users.hasMany(Orders)
Orders.belongsTo(Users)

Users.hasMany(Roles)
Roles.belongsTo(Users)

Users.hasOne(Basket)
Basket.belongsTo(Users)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

module.exports = {
	Parametrs,
	Product,
	Categories,
	ProductOrders,
	BasketProduct,
	Orders,
	Delivery,
	Basket,
	Users,
	Roles
}
