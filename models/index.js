const Sequelize = require('sequelize')
const ManufacturersModel = require('./manufacturers.js')
const ProductsModel = require('./products.js')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)

module.exports = { Manufacturers, Products }
