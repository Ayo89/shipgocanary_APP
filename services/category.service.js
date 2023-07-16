import {api} from './api'

export const getCategories = async () => {
  try {
    const { data } = await api.get('/categories', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get Categories', err)
  }
}
