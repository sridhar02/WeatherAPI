// run `node index.js` in the terminal
const express = require("express");
const weatherRoutes = require("./routes/weather.js");
const forecastRoutes = require("./routes/forecast");

const app = express();

// Middlewares
app.use(express.json());

// routes
app.use("/weather", weatherRoutes);
app.use("/forecast", forecastRoutes);
const PORT = 3000;

app.get("/", (req, res) => res.send("server / end point is working"));

app.listen(PORT, () => console.log("server is running"));
