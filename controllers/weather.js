const { getWeatherData } = require("../Utils");

// export class Weather {
//   static getWeather = async (req, res) => {
//     const { cityName } = req.params;
//     const data = await getWeather(cityName);
//     console.log(data);
//     res.status(200).json(data);
//   };
// }

const getWeather = async (req, res) => {
  const { cityName } = req.params;
  const data = await getWeatherData(cityName);
  res.status(200).json(data);
};

module.exports = { getWeather };
