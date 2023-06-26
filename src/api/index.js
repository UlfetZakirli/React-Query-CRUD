const BASE_URL = 'http://localhost:7000/posts'

export const getPosts = async () => {
    const res = await fetch(BASE_URL)
    return res.json()
}

export const getPost = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`)
    return res.json()
}


export const createPost = async (post) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    return res.json()
}


export const deletePost = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    return res.json()
}

export const editPost = async (post) => {
    const res = await fetch(`${BASE_URL}/${post.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    return res.json()
}