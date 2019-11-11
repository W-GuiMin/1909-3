var express = require('express');
var router = express.Router();
const { find, insert } = require('../db/db')

//路由1 主页，返回给前端，查看地址 http://locahost:3000/companydata
router.get('/companydata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('company')
  res.json(data)
});
//路由2  搜索页，返回给前端，查看地址 http://locahost:3000/searchdata
router.get('/searchdata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let City = req.query.City
  let Name = req.query.Name
  let data = []
  if (City === '全国') {
    data = await find('company', { $or: [{ companyName: { $regex: Name, $options: 'i' } }, { positionName: { $regex: Name, $options: 'i' } }] })
  } else {
    data = await find('company', { $or: [{ city: City, companyName: { $regex: Name, $options: 'i' } }, { city: City, positionName: { $regex: Name, $options: 'i' } }] })
  }
  res.json(data)
});
//路由3 岗位详情页，返回给前端，查看地址 http://locahost:3000/positiondata
router.get('/positiondata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let positionId = Number(req.query.positionId)
  let data = await find('company', { positionId: positionId })
  res.json(data)
});
//路由4 用户名验证，返回给前端，查看地址 http://localhost:3000/login
router.get('/login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let username = req.query.userName
  let data = await find('user', { username: username })
  res.json(data)
});
//路由5 用户注册，返回给前端，查看地址 http://localhost:3000/register
router.get('/register', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let username = req.query.userName
  let password = req.query.password
  let data = await insert('user', [{ username: username, password: password }])
  res.json(data)
});
//路由6 用户投递简历，返回给前端，查看地址 http://localhost:3000/collect
router.get('/collect', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let username = req.query.userName
  let send = req.query.send
  let data = await insert('collect', [{ username: username, send: send }])
  res.json(data)
});
module.exports = router;
