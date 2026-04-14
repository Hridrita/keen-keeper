import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router.jsx'
import { ToastContainer } from 'react-toastify';
import FriendProvider from './Context/FriendContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </FriendProvider>
    
  </StrictMode>,
)
