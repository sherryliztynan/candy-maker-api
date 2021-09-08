/* eslint-disable no-console */
const express = require('express')
const { getAllManufacturersWithProducts, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturersWithProducts)

app.get('/manufacturers/:name', getManufacturerById)

app.get('/products', getAllProducts)

app.get('/products/:name', getProductsById)

app.listen(1337, () => {
  console.log('coding rocks!')
})
