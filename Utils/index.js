// const fetch =  from 'node-fetch';
// import fetch from "node-fetch";
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const API_KEY = "009a21af33d2461ebac122609222412";
const BASE_URL = "http://api.weatherapi.com/v1";

const getWeatherData = async (city) => {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
  );
  const respJSON = await response.json();
  return respJSON;
};

const getForeCastData = async ({ cityName: city, days }) => {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`
  );
  const respJSON = await response.json();
  return respJSON;
};

module.exports = { getWeatherData, getForeCastData };
