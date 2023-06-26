import React from 'react'
import './App.css'
import PostList from './pages/PostList'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App