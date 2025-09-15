import { useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import LandingPage1 from './Components/LandingPage1'
import Technologies from './Components/Technologies'
import FeaturedProjects from './Components/Projects'
import ExperienceEducation from './Components/Education'
import Footer from './Components/Footer'
function App() {
  

  return (
    <>
      <Dashboard />
      <LandingPage1/>
      <Technologies/>
      <FeaturedProjects />
      <ExperienceEducation />
      <Footer />
      
    </>
  )
}

export default App
