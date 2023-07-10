import axios from 'axios'


const API_KEY = 'AIzaSyBfQB6JYLKVUG80JLz26cZCzTkN-PKHF-Y'

export const config = axios.create({
  baseURL:
    `https://maps.googleapis.com/`,
  timeout: 3000,
})


export const getPlaces = async (input) => {
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
}

