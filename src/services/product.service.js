class Product {
    constructor(id, name, price, stock) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

const products = [
    new Product(1, "Apple AirPods Pro", 10000, 10),
    new Product(2, "Sony LinkBuds S", 6000, 1),
    new Product(3, "Sennheiser Momentum", 4000, 1)
]

let count = products.length

exports.findAll = () => products

exports.findByPrice = (min, max) => products.filter(product => product.price >= min && product.price <= max)

exports.findById = (id) => products.filter(product => product.id == id)

exports.add = (product) => {
    count = count + 1
    const productAdded = new Product(count, product.name, product.price, product.stock)
    products.push(productAdded)
    return productAdded
}

exports.update = (id, product) => {
    const index = products.findIndex(product => product.id == id)
    if (index !== -1) {
        const productUpdated = new Product(Number(id), product.name, product.price, product.stock)
        products[index] = productUpdated
        return productUpdated
    }
    return null
}

exports.delete = (id) => {
    const index = products.findIndex(product => product.id == id)
    if (index !== -1) {
        products.splice(index, 1)
        return true
    }
    return false
}
