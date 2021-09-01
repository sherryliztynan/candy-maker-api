/* eslint-disable no-console */
const express = require('express')
const { getAllManufacturersWithProducts, getManufacturerById } = require('./controllers/manufacturers')

const app = express()

app.get('/manufacturers', getAllManufacturersWithProducts)

app.get('/manufacturers/:id', getManufacturerById)

app.listen(1337, () => {
  console.log('coding rocks!')
})
