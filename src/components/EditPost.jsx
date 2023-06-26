import React from 'react'
import PostForm from './PostForm'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { editPost, getPost } from '../api'

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: post, isLoading, error, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id)
  })


  const updatePostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', id] }),
        navigate('/postList')
    }
  })

  const handleEdit = (updatePost) => {
    updatePostMutation.mutate({ id, ...updatePost })
  }

  if (isLoading) return 'Loading...'
  if (isError) return `Error has been happend ${error}`


  return (
    <div className='d-flex justify-content-center'>
      <PostForm onSubmit={handleEdit} initialValue={post} />
    </div>
  )
}

export default EditPost