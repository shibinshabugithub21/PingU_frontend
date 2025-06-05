import React from 'react'
import Navbar from '../Components/User/UserHome/Navbar'
import HomeSection from '../Components/User/UserHome/HomeSection'
import Features from '../Components/User/UserHome/Features' 
import Footer from '../Components/User/UserHome/Footer'

const UserHome = () => {
  return (
    <div>
      <Navbar/>
      <HomeSection/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default UserHome
