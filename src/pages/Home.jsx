import React from 'react'
import { Link } from 'react-router-dom'
import "./../styles/Home.css"
import UrlShortner from './../components/UrlShortner/UrlShortner'

const Home = () => {
  return (
    <div className='hero-section'>
        <div className="homepage">
            <h1>Enter the URL to shorten</h1>
            <UrlShortner />
        </div>
    </div>
  )
}

export default Home
