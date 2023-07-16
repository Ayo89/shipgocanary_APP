import {api} from './api'


export const createShipmentService = async (category_id) => {

    try {
        const { data } = await api.post(`/shipments`,
        {category_id},
         {
          headers: {
            token: localStorage.getItem('token'),
          },
        })
        return data
        
    } catch (err) {
        console.error('Cannot create Shipment', err)
    }
}