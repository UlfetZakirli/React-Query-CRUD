import { useState } from "react"
import PostForm from "./PostForm"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost } from "../api"
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const postMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }),
        navigate('/postList')
    }
  })

  const handlePost = (post) => {
    postMutation.mutate(post)
  }

  return (
    <PostForm onSubmit={handlePost} initialValue={{}} />
  )
}

export default AddPost