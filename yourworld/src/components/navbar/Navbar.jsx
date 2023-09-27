import React, { useState, useEffect } from 'react'
import './navbar.css'
import Hamburger from '../../img/svg/hamburger.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [navcolor, setNavcolor] = useState('nav')
    const [responsiveNavIsOpen, setResponsiveNavIsOpen] = useState(false)


    // change color on scroll
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 50) {
                setNavcolor('navColorato')
            } else {
                setNavcolor('nav')
            }

        }
    })


    // set style
    const openNavStyle = {
        maxHeight: '300px',
    }

    // close and scroll up

    function closeAndScroll() {
        setResponsiveNavIsOpen(!responsiveNavIsOpen)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <nav className={navcolor}>
                <ul className='navBox'>
                    <li className="navElement"> <Link className='navLink' to='/' >Home</Link> </li>
                    <li className="navElement"> <Link className='navLink' to='/temperature' >Temperature</Link> </li>
                    <li className="navElement"> <Link className='navLink' to='/co2' >CO2</Link> </li>
                    <li className="navElement"> <Link className='navLink' to='/metano' >Metano</Link> </li>
                    <li className="navElement"> <Link className='navLink' to='/no2' >NO2</Link> </li>
                    <li className="navElement"> <Link className='navLink' to='/ghiacciopolare' >Ghiaccio Polare</Link> </li>
                </ul>
            </nav>

            <nav className="responsiveNav" style={responsiveNavIsOpen ? openNavStyle : null}>
                <div className="responsiveNavBox">
                    <div className="responsiveContainer">
                        <h1 className="navbarResponsiveTitle">
                            YOUR WORLD
                        </h1>
                        <button className='navButton' onClick={() => setResponsiveNavIsOpen(!responsiveNavIsOpen)}>
                            <img className='hamburgerSvg' src={Hamburger} />
                        </button>
                    </div>

                    <ul className='navBoxResponsiveLink' style={responsiveNavIsOpen ? openNavStyle : null} >
                        <li className="navElementResponsive" onClick={closeAndScroll}> <Link className='navLinkResponsive' to='/' >Home</Link> </li>
                        <li className="navElementResponsive" onClick={closeAndScroll}> <Link className='navLinkResponsive' to='/temperature' >Temperature</Link> </li>
                        <li className="navElementResponsive" onClick={closeAndScroll}> <Link className='navLinkResponsive' to='/co2' >CO2</Link> </li>
                        <li className="navElementResponsive" onClick={closeAndScroll}> <Link className='navLinkResponsive' to='/metano' >Metano</Link> </li>
                        <li className="navElementResponsive" onClick={closeAndScroll}> <Link className='navLinkResponsive' to='/no2' >NO2</Link> </li>
                        <li className="navElementResponsive" onClick={closeAndScroll}> <Link className='navLinkResponsive' to='/ghiacciopolare' >Ghiaccio Polare</Link> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
