import { headers } from '../utils/headers'
import { backUpLocalStorage } from './backUpLocalStorage'
import { setLocalStorage } from './setLocalStorage'

const API_URL = import.meta.env.VITE_API_URL

/* Function to obtain the data of all barbers */
export const getUsers = async (role, type, setData, setLoading) => {
  let data = []
  const requestOptions = {
    method: 'GET',
    // headers: headers
  }

  console.log("🚀 ~ file: getUsers.js:18 ~ getUsers ~ API_URL:", API_URL + 'api/user')
  
  try {
    const res = await fetch(API_URL + 'api/user', requestOptions)
    let data = await res.json()
    console.log("🚀 ~ file: getUsers.js:20 ~ getUsers ~ data:", data)
    data = data.filter((user) => user.role === role)
    setLoading(true)
    setData(data)
    const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage()
    setLocalStorage(_id, _name, _role, _urlImg, _token)
    localStorage.setItem(type, JSON.stringify(data))
  } catch (error) {
    console.log('error: ', error)
  }
  return data
}
