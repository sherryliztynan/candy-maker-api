const Sequelize = require('sequelize')
const ManufacturersModel = require('./manufacturers.js')
const ProductsModel = require('./products.js')
const AllConfigs = require('../config/sequelize')
const environment = process.env.NODE_ENV || 'development'
const {
  username, password, database, host, dialect
} = AllConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host, dialect
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)

module.exports = { Manufacturers, Products }
