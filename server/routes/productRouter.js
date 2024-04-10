const Router = require('express')
const router = new Router()
const productController = require('./../controllers/productController')

router.post('/', productController.addProduct)
router.get('/', productController.getProduct)
router.get('/:id', productController.getProductById)


module.exports = router
