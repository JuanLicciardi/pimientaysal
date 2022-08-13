var express = require('express');
var router = express.Router();

const {index,detail} = require('../controllers/indexController')

/* llego como / */
router
  .get('/', index)
  .get('/detail/:id',detail)

module.exports = router;
