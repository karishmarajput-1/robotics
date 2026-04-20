import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Footer from './components/Footer'
import Jobs from './pages/Jobs'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Explore from './components/Explore'
import ServiceDetails from "./pages/ServiceDetails";
import ImageView from './pages/ImageView'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:id' element={<ServiceDetails />} />
        <Route path='/service/:id/image/:imgIndex' element={<ImageView/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path='/admin' element={<Admin />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}
