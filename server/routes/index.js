const router = require('express').Router();

const {
  createHouse,
  getHouses,
  deleteHouse,
  updateHouse,
} = require('../controllers/index');

router.post('/', createHouse);
router.get('/', getHouses);
router.delete('/:id', deleteHouse);
router.put('/:id', updateHouse);

module.exports = router;
