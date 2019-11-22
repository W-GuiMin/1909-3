var express = require('express');
var router = express.Router();
const { find } = require('../db/db')

router.get('/loginname', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let adminName = req.query.adminName
  let data = await find('admin', { adminName: adminName })
  res.json(data)
});
router.get('/shop', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let adminName = req.query.adminName
  let data = await find('shop', { adminName: adminName })
  res.json(data)
});
router.get('/users', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('users')
  res.json(data)
});
router.get('/shopdata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  // let { name, boss, tel, time, address, youbian, description } = JSON.parse(req.query.shopdata)
  // let { name, boss, tel, time, address, youbian, description } = JSON.parse(req.query.shopdata)
  // let { name, boss, tel, time, address, youbian, description } = JSON.parse(req.query.shopdata)
  // let data = await find('admin', {'adminName':name})
  // res.json(data)
});
module.exports = router;
