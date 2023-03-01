import React, {Fragment, useState} from 'react'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import Timeline from '../components/Timeline'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Fragment>
            <Sidebar isOpen={isOpen} toggle ={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <Timeline/>
            <Services/>
        </Fragment>
    )
}

export default Home
