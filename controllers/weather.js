import { getWeatherData } from '../Utils';

// export class Weather {
//   static getWeather = async (req, res) => {
//     const { cityName } = req.params;
//     const data = await getWeather(cityName);
//     console.log(data);
//     res.status(200).json(data);
//   };
// }

export const getWeather = async (req, res) => {
  const { cityName } = req.params;
  const data = await getWeatherData(cityName);
  console.log(data);
  res.status(200).json(data);
};
