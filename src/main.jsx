import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './routes/AboutUs'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
         <Route  path="/" element={<App />} />
         <Route  path="about" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
</React.StrictMode>)
