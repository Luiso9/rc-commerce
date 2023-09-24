// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import ProductsList from './pages/Product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <ProductsList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="light text-foreground bg-background">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)