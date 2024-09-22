import React from 'react';
import { useState, useEffect } from 'react'
// import Navigation from '../Navigation';
import Header from '../Header';
import About from '../About'
import Services from '../Services'
import Gallery from '../Gallery'
// import Testimonials from '../Testimonials'
// import Contact from '../Contact'
import JsonData from '../../data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const Bahale = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
      setLandingPageData(JsonData)
    }, [])
    return (
        <div>
            {/* <Navigation /> */}
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery />
            {/* <Testimonials data={landingPageData.Testimonials} />
            <Contact data={landingPageData.Contact} /> */}
        </div>
    )
}

export default Bahale;