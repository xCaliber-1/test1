

const Product = require('../models/Product');

const cart = require('../models/cart')

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(__dirname,'../','views','shop.html'));   // To send out the response instead of write we use send provided by express
  // res.sendFile(path.join(routeDir,'views','shop.html'));
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  })
};

exports.getProduct = (req,res,next) =>{
  const prodID = req.params.productID       // Extract params data
  Product.findByID(prodID , product => {
    // console.log(product)
    res.render('shop/product-detail', {product:product , pageTitle:product.title , path: '/product'});
  })
}

exports.getIndex  = (req,res,next) => {
  Product.fetchAll(products => {
  res.render("shop/index", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
});
};

exports.getCart = (req,res,next) =>{
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
  });
}

exports.postCart = (req,res,next) => {
const prodID = req.body.productID   // Extracting incoming data
Product.findByID (prodID , (product)=>{
  cart.addProduct(prodID , product.price)
})
res.redirect('/')
}


exports.getOrders = (req,res,next) =>{
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
  });
}

exports.getCheckout = (req,res,next) =>{
  res.render("shop/checkout", {
    pageTitle: " Checckout ",
    path: "/checkout",
  });
}