const express = require("express")
const Router = express.Router()
const taxController = require("../controller/tax")

Router.post("/fetch", taxController.fetchTax)

module.exports = Router