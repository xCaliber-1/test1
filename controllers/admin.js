

const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {    
    console.log("In add -product middleware");
    // res.sendFile(path.join(routeDir,'views','add-product.html'));     // To send out the response instead of write we use send provided by express
    res.render("admin/add-product",{ pageTitle: "Add Product", path: "/admin/add-product" });     //This looks for render engine that is done in app.js as view engine
  };    // name at start of each controller like "add-product" , "shop" is for the template engine to recognise which files to load cause we already told node to 
        //look in views folder in app.js file when setting template engine. If it ware in sub-folder then use relative path instaed of plain text
  
exports.postAddProduct = (req, res, next) => {
  
  const title = req.body.title;    // Extracting from the form can check add-product.ejs
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product (title,imageUrl,description,price);     // While passing argument check the sequence in models
  product.save()
  res.redirect("/");
  };
  
exports.getProducts = (req,res,next) =>{
    Product.fetchAll((products) => {
        res.render("admin/products", {
          prods: products,
          pageTitle: "Admin Products",
          path: "/admin/products",
        });
      })
}