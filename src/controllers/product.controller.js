const productService = require('../services/product.service')

exports.getAllProducts = (req, res) => res.json(productService.findAll())


exports.getProductByPrice = (req, res) => {
    const { min, max } = req.query
    res.json(productService.findByPrice(min, max))
}

exports.getProductById = (req, res) => {
    const result = productService.findById(req.params.id)
    if (result.length > 0) {
        res.json(result[0])
    } else {
        res.status(404).json({ "Status": "Not Found" })
    }
}

exports.addProduct = (req, res) => res.status(201).json(productService.add(req.body))

exports.updateProduct = (req, res) => {
    const result = productService.update(req.params.id, req.body)
    if (result) {
        res.json(result)
    } else {
        res.status(404).json({ "Status": "Not Found" })
    }
}

exports.deleteProduct = (req, res) => {
    const result = productService.delete(req.params.id)
    if (result) {
        res.status(204).json({ "Status": "Success"})
    } else {
        res.status(404).json({ "Status": "Not Found" })
    }
}
