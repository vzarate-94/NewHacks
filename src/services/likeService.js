import * as tokenService from './tokenService'
const BASE_URL = '/api/posts/'



export const createLike = async (postId, like) => {
    try {
        const res = await fetch(`${BASE_URL}${postId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(like)
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


export const deleteLike = async (postId, likeId) => {
    try {
        const res = await fetch(`${BASE_URL}${postId}/likes/${likeId}`, {
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}