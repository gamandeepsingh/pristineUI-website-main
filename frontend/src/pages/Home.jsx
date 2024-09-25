import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'

const Home = ({toggleTheme}) => {
    return (
        <div className="bg-light text-dark dark:bg-dark dark:text-light min-h-svh">
            
            <Hero/>
            <About/>
            
        </div>
    )
}

export default Home