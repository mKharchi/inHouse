import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/authContext'
import { ToastContainer } from "react-toastify"
import ShopContextProvider from './context/ShopContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </AuthProvider>
    <ToastContainer />
  </BrowserRouter>,
)
