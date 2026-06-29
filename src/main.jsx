import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { HelmetProvider } from 'react-helmet-async' // <-- Yeh import add kiya hai

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* <-- App ko is se wrap kiya hai */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)