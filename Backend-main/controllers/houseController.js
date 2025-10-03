const houseModel = require('../Models/houseModel');

async function addNewHouse(req, res) {
    let houseData = req.body;
    let house = await houseModel.create(houseData);
    
    res.status(200).json({
        status:true,
        message:"Success..",
        house: house
    })
}

async function allAvailableHouses(req, res) {
    let result = await houseModel.find();
    
    return res.json({
        status:true,
        message: "Success..",
        houses: result
    })
}

module.exports = {
    addNewHouse: addNewHouse,
    allAvailableHouses: allAvailableHouses
}