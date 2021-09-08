const models = require('../models')
const { Op } = require('Sequelize')

const getAllManufacturersWithProducts = async (request, response) => {
  const manufacturers = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return response.send(manufacturers)
}

const getManufacturerById = async (request, response) => {
  const { name } = request.params

  const manufacturer = await models.Manufacturers.findOne({
    where: { name: { [Op.like]: `%${name}%` } },
    //where: { name: { [Op.substring]: `${name}` } },//
    include: [{ model: models.Products, attributes: ['id', 'name', 'yearIntroduced'] }],
    attributes: ['id', 'name', 'country']
  })

  return manufacturer
    ? response.send(manufacturer)
    : response.sendStatus(404)
}

module.exports = { getAllManufacturersWithProducts, getManufacturerById }
