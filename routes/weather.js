const express = require("express");
const { getWeather } = require("../controllers/weather");

const router = express.Router();

router.get("/:cityName", getWeather);

module.exports = router;
