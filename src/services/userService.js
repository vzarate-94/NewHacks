const BASE_URL = '/api/users'

const getAllUsers = async () => {
  try {
      const res = await fetch(`${BASE_URL}all-users`, { mode: "cors" })
      const data = await res.json()
      return data
  } catch (error) {
      throw error
  }
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