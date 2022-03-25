import * as tokenService from './tokenService'

const BASE_URL = '/api/posts/'




export const search = async (keyword) => {
    try {
        const res = await fetch(`${BASE_URL}search?keyword=${keyword}`, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}




export const getPaginatedPosts = async (page) => {
    try {
        const res = await fetch(`${BASE_URL}${page}`, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


export const getPostById = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}details/${id}`, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


export const getUserPosts = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}user/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken()
            },
        }, { mode: 'cors' })

        const data = await res.json()
        return data

    } catch (error) {
        throw error
    }
}


export const createPost = async (post) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(post)
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


export const updatePost = async (postId) => {
    try {
        const res = await fetch(`${BASE_URL}${postId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            },
        }, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


export const deletePost = async (postId) => {
    try {
        await fetch(`${BASE_URL}${postId}`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
        }, { mode: 'cors' })
    } catch (error) {
        throw error
    }
}