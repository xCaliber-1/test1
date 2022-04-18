const path = require("path");
const fs = require("fs");

const pathToJSON = path.join(
  // Path for JSON file
  path.dirname(require.main.filename),
  "data",
  "cart.json"
);

class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(pathToJSON, (error, filecontent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!error) {
        cart = JSON.parse(filecontent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex((prod) => prod.id === id);

      console.log(cart.products.findIndex((prod) => prod.id === id))

      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct }; // if updated product same as existing product then add all property of existing to new and increment qty by 1
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
      }
      cart.totalPrice = cart.totalPrice + + productPrice;
      cart.products = [...cart.products, updatedProduct];
      fs.writeFile(pathToJSON,JSON.stringify(cart),(err)=>{
          console.log(err)
      })
    });
  }
}

module.exports = Cart;
