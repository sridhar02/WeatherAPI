import fetch from 'node-fetch';

const API_KEY = '009a21af33d2461ebac122609222412';
const BASE_URL = 'http://api.weatherapi.com/v1';


export async const getWeatherData = (city) =>{
  const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
  const respJSON = await response.json()
  return respJSON;
}



export async const getForeCast = ({city,days}) =>{
  const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`)
  const respJSON = await response.json()
  return respJSON
}