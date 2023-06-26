import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const navigation = [
        { path: '/postList', name: 'Post List' },
        { path: '/addPost', name: 'Add Post' }
    ]

    return (
        <nav className='d-flex justify-content-center mt-4 gap-2'>
            {
                navigation.map((nav) => (
                    <NavLink className='btn headerBtn' key={nav.name} to={nav.path}>{nav.name}</NavLink>
                ))
            }
        </nav>
    )
}

export default Header