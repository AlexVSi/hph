class ProductController {
	async addProduct(req, res) {

	}
	async getProduct(req, res) {

	}

	async getProductById(req, res) {
		const {id} = req.query
		res.json(id)
	}
}

module.exports = new ProductController()
