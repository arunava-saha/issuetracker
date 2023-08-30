const express = require('express');
const app = express();
require('dotenv').config();
port = process.env.PORT || 8000;





app.listen(port, () => { console.log("server connected to the port: " + port) })