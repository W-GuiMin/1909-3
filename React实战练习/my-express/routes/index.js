var express = require('express');
var router = express.Router();
const { find, upOne, insert, delOne } = require('../db/db')

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
  let adminName = req.query.adminName
  let data = await find('users', { adminName: adminName })
  res.json(data)
});
router.get('/shopdata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let values = JSON.parse(req.query.values)
  let adminName = req.query.adminName
  let data = await upOne('admin', { adminName: adminName }, { shop: values })
  res.json(data)
});
router.get('/commodity', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let adminName = req.query.adminName
  let data = await find('commodity', { adminName: adminName })
  res.json(data)
});
router.get('/findCommodity', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let gid = req.query.gid
  let adminName = req.query.adminName
  let data = await find('commodity', { adminName: adminName, gid: gid })
  res.json(data)
});
router.get('/add', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let commodity = JSON.parse(req.query.commodity)
  let gid = req.query.gid
  let adminName = req.query.adminName
  let data = await insert('commodity', [{ adminName: adminName, gid: gid, commodity: commodity }])
  res.json(data)
});
router.get('/del', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let gid = req.query.gid
  let adminName = req.query.adminName
  let data = await delOne('commodity', { adminName: adminName, gid: gid })
  res.json(data)
});
router.get('/update', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let commodity = JSON.parse(req.query.commodity)
  let gid = req.query.gid
  let adminName = req.query.adminName
  let data = await upOne('commodity', { adminName: adminName, gid: gid }, { commodity, commodity })
  res.json(data)
});
module.exports = router;
