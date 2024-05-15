import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ImageProvider } from './Components/context/contextprovider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageProvider> <App /></ImageProvider>
   
    
  </React.StrictMode>,
)
