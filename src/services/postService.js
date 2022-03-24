import * as tokenService from './tokenService'

const BASE_URL = 'api/posts/'

export const getPaginatedPosts = async (page) => {
  try {
      const res = await fetch(`${BASE_URL}${page}`, { mode: "cors" })
      const data = await res.json()
      return data
  } catch (error) {
      throw error
  }
}