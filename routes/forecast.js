const express = require("express");
const { getForeCast } = require("../controllers/forecast");

const router = express.Router();

router.get("/:cityName/:days", getForeCast);

module.exports = router;
