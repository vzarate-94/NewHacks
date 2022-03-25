import * as tokenService from './tokenService'

const BASE_URL = '/api/users'

function getAllUsers() {
  return fetch(
    BASE_URL, 
    { headers: {Authorization: `Bearer ${tokenService.getToken()}`}},
    { mode: 'cors'}
  )
  .then(res => res.json())
}

const getTopUsers = async () => {
  try {
      const res = await fetch(`${BASE_URL}top-users`, { mode: "cors" })
      const data = await res.json()
      return data
  } catch (error) {
      throw error
  }
}

export {
  getAllUsers,
  getTopUsers
}