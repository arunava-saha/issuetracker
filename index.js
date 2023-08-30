const express = require('express');
const { db } = require('./config/mongoose');
const router = require('./routes/routes');
const app = express();
require('dotenv').config();
port = process.env.PORT || 8000;

//DATABASE CONNECTION
db();

app.get('/', router)



app.listen(port, () => { console.log("server connected to the port: " + port) })