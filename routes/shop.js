const path = require('path')

const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();    // Router 

router.get('/', shopController.getIndex);
    
router.get('/products', shopController.getProducts)

// Express supports dynamic params extraction. And can be done like shown. It will send value of params in ProductID
router.get("/products/:productID" , shopController.getProduct);     // This intern creates dynamic params, Dont forget colon. 

// positioning matters when using params u put the params route below the static route of same segment because then code wont reach static route
// eg. /products/delete below the params then delete would be treated as dynamic route rather than static

router.get('/cart', shopController.getCart)

router.post('/cart' , shopController.postCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)


module.exports = router; 