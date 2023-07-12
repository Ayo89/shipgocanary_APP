import { api } from './api'

export const login = async (email, password) => {
  try {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Cannot Log in', error)
  }
}

export const signup = async (name,last_name, email, password, phone) => {
  try {
    const { data } = await api.post('/auth/signup', {
      first_name: name,
      last_name,
      email,
      password,
      phone,

    })
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Something goes wrong', error)
  }
}
