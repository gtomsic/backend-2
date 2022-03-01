const { v4: uuid } = require('uuid');
const houses = require('../db.json');
module.exports = {
  createHouse: (req, res) => {
    houses.push({ id: uuid(), ...req.body });
    res.status(200).send(houses);
  },
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  updateHouse: (req, res) => {
    console.log('Update House');
  },
  deleteHouse: (req, res) => {
    console.log('Delete House');
  },
};
