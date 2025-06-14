import React, { useEffect } from "react"
import HeroSection from "./components/HeroSection"
import PopularDestinations from "./components/PopularDestinations"
import OurAdvantages from "./components/OurAdvantages"
import TourPackages from "./components/TourPackages"
import Testimonials from "./components/Testimonials"
import useGetAllDestination from "./hooks/useGetAllDestination"

function App() {

  return (
    <>
      <HeroSection />
      <PopularDestinations />
      <OurAdvantages />
      <TourPackages />
      <Testimonials />
    </>
  )
}

export default App
