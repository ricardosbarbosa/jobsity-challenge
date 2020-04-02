import { normalize } from 'normalize-data'

export const fromApiGetWeather = data => {
  const forecastDay = data.forecast.forecastday[0].day.condition
  return normalize(forecastDay, [
    ['text', 'text'],
    ['icon', 'icon', value => value && 'http://' + value.substr(2, value.length - 2)],
  ])
}
