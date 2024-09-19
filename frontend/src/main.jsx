import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
    containerStyle={
      {
        top: '50px',
        right: '50px',
        position: 'fixed',
        zIndex: 9999,
      }
    }
    />
  </StrictMode>,
)
