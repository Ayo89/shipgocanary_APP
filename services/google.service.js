import { api } from './api'

/* 
 const API_KEY = 'AIzaSyBfQB6JYLKVUG80JLz26cZCzTkN-PKHF-Y' */




/* export const getPlaces = async (input) => {
  try {
    const { data } = await config.get(
      `maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${API_KEY}`,
      {
        headers: { },
      }
    )
    return data
  } catch (error) {
    console.log('Cannot connect')
  }
}   */


export const getPlaces = async (input) => {
  try {
    const { data } = await api.get(
      `/google?input=${input}`,
      {
        headers: { },
      }
    )
    return data
  } catch (error) {
    console.log('Cannot connect')
  }
} 

