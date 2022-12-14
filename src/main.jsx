import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './routes/AboutUs'
import Blog from './routes/Blog'
import Contactus from './routes/Contactus'
import SignIn from './routes/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
         <Route  path="/" element={<App />} />
         <Route  path="about" element={<AboutUs />} />
         <Route  path="Blog" element={<Blog />} />
         <Route  path="Contactus" element={<Contactus />} />
         <Route  path="SignIn" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
</React.StrictMode>)
