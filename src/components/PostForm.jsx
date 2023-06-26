import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostForm = ({ onSubmit, initialValue }) => {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: initialValue.title || '',
        body: initialValue.body || ''
    })

    console.log(initialValue);
    const handleInputChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const renderInputField = (label, placeholder) => (
        <div className="inputField">
            <label className="mb-1" htmlFor={label}>{label}</label>
            <input
                id={label}
                type="text"
                value={post[label.toLowerCase()]}
                placeholder={placeholder}
                name={label.toLowerCase()}
                onChange={handleInputChange}
            />
        </div>
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(post)
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                {renderInputField('Title', 'Enter a title...')}
                {renderInputField('Body', 'Enter a body...')}
                <button className="btnSubmit mt-4">Submit</button>
            </form>
        </div>
    )
}

export default PostForm