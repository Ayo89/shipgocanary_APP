import {api} from './api'


export const createShipmentService = async (
  category_id,
  desde,
  hasta,
  sendDate,
  receiveDate,
  title,
  quantity,
  services,
  imgShipment,
  description,
  price
) => {
  try {
    const { data } = await api.post(
      `/shipments`,
      {
        name: title,
        quantity,
        service: services,
        category_id,
        img: imgShipment,
        description,
        from_direction: desde,
        to_direction: hasta,
        date_shipment: sendDate,
        date_delivery: receiveDate,
        price
      },
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    )
    return data
  } catch (err) {
    console.error('Cannot create Shipment', err)
  }
}