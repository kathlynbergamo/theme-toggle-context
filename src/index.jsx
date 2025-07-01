import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'

//configurante um objeto de rotas
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/contact', element: <Contact /> }
        ]
    }
])

import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>)
