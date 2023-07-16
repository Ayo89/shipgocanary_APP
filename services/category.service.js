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

export const updateShipmentCategory = async (shipment_id, category_id) => {
  try {
    const { data } = await api.put(`/categories/${shipment_id}`,
    {category_id},
     {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get Categories', err)
  }
}


