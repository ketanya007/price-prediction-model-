const axios = require("axios");

async function preditPrice(req, res) {
  let area,
    city,
    location;

  if (req.body.area) {
    area = req.body.area;
  } else {
    res.status(400).json({
      status: false,
      message: "Area is required...",
    });
    return;
  }
 
  if(req.body.city) {
    city = req.body.city
  } else {
    city = 0;
  }

  if(req.body.location) {
    location = req.body.location
  } else {
    location = 0;
  }


  await axios
    .post("https://realestate-ml-backend.onrender.com/have", {
      "Area": area,
      "Location": location,
      "City": city,
    })
    .then(function (response) {
      res.status(200).json({
        status: response.data.status,
        price: response.data.price,
      });
    })
    .catch(function (error) {
      res.status(400).json({
        status: false,
        error: error,
      });
    });
}

module.exports = preditPrice;
