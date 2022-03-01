const houses = require('../db.json');
module.exports = {
  createHouse: (req, res) => {
    console.log('Create House');
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
