import Axios from "axios"
import moment from "moment"
import { fromApiGetWeather } from "./normalize/weatherapi"

export const getWeatherByCityAndDate = (city, date) => {
  const key = 'fa13689ac4124371a83205451200204'
  const url = `http://api.weatherapi.com/v1/history.json?key=${key}&q=${city}&dt=${moment(date).format('YYYY-MM-DD')}`
  return Axios.get(url)
    .then(response => fromApiGetWeather(response.data))
}
