const express = require('express')
const preditPrice = require('../controllers/predictionController')

const predictionRouter = express.Router();

predictionRouter.route('/predict').post(preditPrice);

module.exports = predictionRouter;