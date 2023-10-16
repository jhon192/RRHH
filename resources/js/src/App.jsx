import React from 'react'
import "../src/index.css"
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App