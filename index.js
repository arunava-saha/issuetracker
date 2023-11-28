const express = require("express");
const { db } = require("./config/mongoose");
const router = require("./routes/routes");
const app = express();
require("dotenv").config();
port = process.env.PORT || 8000;
const path = require("path");

//LAYOUTES
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "assets")));

app.use(layouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//DATABASE CONNECTION
db();
//routers
app.use(express.json());
app.use("/", require("./routes/routes"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
