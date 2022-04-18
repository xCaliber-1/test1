const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); //Body parser

const app = express();

app.set("view engine", "ejs"); // Adding dynamic engine
app.set("views", "views"); //Where to find

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false })); //Parse the input that we were doing manually
app.use(express.static(path.join(__dirname, "public"))); // provide static access means read only to css file

app.use("/admin", adminRoutes);
app.use(userRoutes);

const error = require("./controllers/404");
app.use(error.error404);


app.listen(3000,console.log("Listning on port 3000"));
