import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Blog from './Components/Blog/Blog'
import Details from './Components/Details/Details'
import NotFound from './Components/404/NotFound'

function App() {
    const routes = createBrowserRouter([
        {
            path: "", element: <Layout />, children: [
                { index: true, element: <Home /> },
                { path: "Blog", element: <Blog /> },
                {
                    path: "Blog/Details",
                    element: <Details />
                },
                {
                    path: "*",
                    element: <NotFound />
                }

            ]
        }
    ])

    return (
        <>
            <RouterProvider router={routes}>

            </RouterProvider>
        </>
    )

}

export default App
