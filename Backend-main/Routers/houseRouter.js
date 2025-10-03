const express = require("express");
const isLoggedIn = require("../middlewares/protectRoute");
const {
  addNewHouse,
  allAvailableHouses,
} = require("../controllers/houseController");

const houseRouter = express.Router();

houseRouter
  .route("/availableHouses")
  .post(isLoggedIn, addNewHouse)
  .get(allAvailableHouses);

module.exports = houseRouter;
