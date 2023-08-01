// 1. imports
require("dotenv").config();
const express = require("express");
const helmet = require("helmet")
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./Users/users-router");
const authRouter = require("./Auth/auth-router");

const server = express();

// 2. global middlewares
server.use(helmet());       // 3rd party middleware
server.use(cors());         // 3rd party middleware
server.use(morgan("dev"));  // 3rd party middleware
server.use(express.json);   // build-in middleware

// 3. routers
server.get('/', (req, res) => {
    res.json({message: "Server up and running..."})
})
server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);

// 4. error middlewares
server.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({message: err.message || "Server error!..."})
});

// 5. exports
module.exports = server;


