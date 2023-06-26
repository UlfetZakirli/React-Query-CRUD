import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPost } from '../api'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id)
  })

  if (isLoading) return 'Loading...'
  if (isError) return `Error has been happend!: ${error}`
  return (
    <div className='post'>
      <h5>id# {post.id}</h5>
      <h6>{post.title}</h6>
      <p>{post.body}</p>
    </div>
  )
}

export default Post