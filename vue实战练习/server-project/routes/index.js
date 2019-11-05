var express = require('express');
var router = express.Router();
const { find } = require('../db/db')


//路由2 读取mysql数据库表里的数据，返回给前端，查看地址 http://locahost:3000/company
router.get('/companydata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('company')
  res.json(data)
});
module.exports = router;
