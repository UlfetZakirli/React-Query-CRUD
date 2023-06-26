import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deletePost, getPosts } from '../api'
import { useNavigate } from 'react-router-dom'

const PostList = () => {
    const navigate = useNavigate()
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    })

    const queryClient = useQueryClient()

    const deleteMutaionPost = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })

    const handleDeletePost = (id) => {
        deleteMutaionPost.mutate(id)
    }

    if (isLoading) return 'Loading data....'
    if (isError) return `Error has been happend!: ${error}`

    return (
        <div className='mt-3'>
            <h4 className='text-center'>Post List</h4>
            <div className='posts'>
                {
                    data.map((post) => (
                        <div className='post' key={post.id}>
                            <h6>id# {post.id}</h6>
                            <h6>{post.title}</h6>
                            <p>{post.body}</p>
                            <div className="buttons d-flex gap-1">
                                <button onClick={() => navigate(`/editPost/${post.id}`)} className='btn btn-success btn-sm'>Edit</button>
                                <button onClick={() => handleDeletePost(post.id)} className='btn btn-danger btn-sm'>Delete</button>
                                <button onClick={() => navigate(`/postDetail/${post.id}`)} className='btn btn-primary btn-sm'>Detail</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PostList