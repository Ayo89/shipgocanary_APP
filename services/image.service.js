import { api } from './api'



export const getImage = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
  try {
    const { data } = await api.post(`/images`, formData,
    {
       headers: {
            'Content-Type': 'multipart/form-data',
          },
    })
    return data.secure_url
  } catch (error) {
    console.log('Cannot connect')
  }
} 
