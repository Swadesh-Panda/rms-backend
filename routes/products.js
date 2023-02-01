const express = require('express')
const { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } = require('../controllers/productController')

// express router
const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)

module.exports = router