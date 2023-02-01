const mongoose = require('mongoose')
const Product = require('../models/productModel')

// GET all products
const getAllProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}

// GET product by id
const getProductById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'product id invalid' })

    const product = await Product.findById(id)
    if (!product) return res.status(404).json({ error: 'product not found' })
    return res.status(200).json(product)
}

// POST new product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// DELETE a product
const deleteProduct = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'product id invalid' })

    const product = await Product.findOneAndDelete({ _id: id })
    if (!product) return res.status(404).json({ error: 'product not found' })
    res.status(200).json(product)
}

// UPDATE a product
const updateProduct = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'product id invalid' })

    const product = await Product.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!product) return res.status(404).json({ error: 'product not found' })
    res.status(200).json(product)
}

module.exports = { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct }