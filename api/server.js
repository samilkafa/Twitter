// 1. imports
const express = require('express');
const server = express();
require('dotenv').config();

// 2. global middlewares


// 3. routers
server.get('/', (req, res) => {
    res.json({message: "Server up and running..."})
})

// 4. error middlewares


// 5. exports
module.exports = server;


