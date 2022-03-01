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
    const addPrice = 10000;
    let editHouse = {};
    console.log(req.params, req.body);
    houses.forEach((house, index) => {
      if (house.id === Number(req.params.id)) {
        editHouse = house;
        houses.splice(index, 1);
      }
    });
    switch (req.body.type) {
      case 'plus':
        console.log('Plus');
        houses.push({ ...editHouse, price: editHouse.price + addPrice });
        res.status(200).send(houses);
        break;
      case 'minus':
        console.log('Minus');
        houses.push({ ...editHouse, price: editHouse.price - addPrice });
        res.status(200).send(houses);
        break;
      default:
        console.log('Nothing');
    }
  },
  deleteHouse: (req, res) => {
    console.log(req.params);
    houses.forEach((house, index) => {
      if (house.id === Number(req.params.id)) {
        houses.splice(index, 1);
        res.status(200).send(houses);
      }
    });
  },
};
