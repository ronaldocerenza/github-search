import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.tsx'


// Criação de rotas, com o react-router-dom, para o componente App, atraves do createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Children são as rotas filhas de App
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* aqui a rota recebe com provider */}
  </React.StrictMode>,
)
