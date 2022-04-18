const path = require('path')

const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router();    // Router for handling requests


// Below same address is fetched but the methods different
// /admin/add-product => GET
router.get('/add-product',adminController.getAddProduct) // passing refrence here . Dont add () this will executefunction here.

// /admin/add-product => GET
router.get('/products' , adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product',adminController.postAddProduct)
// ((req, res, next) : next is Callback argument to the middleware functio  n

module.exports = router;
