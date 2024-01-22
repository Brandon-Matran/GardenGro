const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/weather", async (req, res) => {
  try {
    const weatherKey = process.env.OPEN_WEATHER_API_KEY;
    const city = req.query.city;
    const state = req.query.state;
    const country = req.query.country;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${weatherKey}&units=imperial`;

    const response = await axios.get(apiUrl);
    res
      .status(200)
      .json({
        name: response.data.name,
        country: response.data.sys.country,
        weather: response.data.weather[0].description,
        temp: response.data.main.temp,
        tempMax: response.data.main.temp_max
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
