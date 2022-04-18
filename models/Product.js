// Constructor function used to create new object inside of it
// module.exports = function product (){}

// When using next gen JS we can use class directly & make constructor function here

const fs = require("fs");
const path = require("path");

const pathToJSON = path.join(path.dirname(require.main.filename),"data","products.json");    // Path for JSON file

//Helper Function for path construction
const getProductFromFile = (callback) =>{       
  fs.readFile(pathToJSON,(err,fileContent)=>{            // ReadFiles have 2 Args : Path & Callback Fun
    if (err){
      return callback([]);                               // Returns Callback 
    }
    else{
    callback (JSON.parse(fileContent));                   // Else parse the data of received file
    }
  });
};

// Creating Class

module.exports = class Product {
  
  constructor(title, imageURL, description, price) {        // constructor function, this is like init in python class
  this.title = title;          // These are all the Property class product will be having 
  this.imageUrl = imageURL;
  this.description = description;
  this.price = price;
  }

  save() {                      // Save method function
    // product.push(this);     // this : referes to object created based on class
    this.id = Math.random().toString(); // Creating unique id for each product we creat
    getProductFromFile(products => {
        products.push(this);
        fs.writeFile(pathToJSON, JSON.stringify(products), error => {
        console.log(error)
      });
    });
  }

  static fetchAll(callback) {       // static : helps to call all data in products at once instead of calling each by some duummy name
    getProductFromFile(callback)
  }

  static findByID( id , cb ) {
    getProductFromFile(products => {
      const product = products.find(p => p.id === id)   // Single line arrow fun
      cb(product)
    })
  }

};
