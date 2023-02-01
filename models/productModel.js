const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('product',productSchema)