const express = require("express")
const Router = express.Router()
const tax = require("./tax")


Router.use("/taxCalculate", tax)

module.exports = Router