import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/navbar.scss'
import './scss/home.scss'
import './scss/login.scss'
import './scss/mais.scss'
import './scss/_global.scss'
import Home from './Routes/Home.jsx'
import Login from './Routes/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mais from './Routes/Mais.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    /* errorElement: <NotFound />, */

    children: [
      { path: '/Home', element: <Home /> },
      { path: '/Mais', element: <Mais /> },
      { path: '/', element: <Login /> }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
