import { api } from './api'

export const getUserLogged = async () => {
  try {
    const { data } = await api.get('/users/profile', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get user logged', err)
  }
}

export const getUsers = async () => {
  try {
    const { data } = await api.get('/users', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get users', err)
  }
}
