const ApiError = require('./../error/apiError')
class UserController {
	async regisatration(req, res) {

	}
	async login(req, res) {

	}
	async check(req, res, next) {
		const {id} = req.query
		if (!id) {
			return next(ApiError.badRequest('Не задан id'))
		}
		res.json(id)
	}
}

module.exports = new UserController()
