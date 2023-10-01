import React, { useState, useEffect } from 'react'
import styles from './navbar.module.css'
import Hamburger from '../../img/svg/hamburger.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [navcolor, setNavcolor] = useState('nav')
    const [responsiveNavIsOpen, setResponsiveNavIsOpen] = useState(false)


    // change color on scroll
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 50) {
                setNavcolor(styles.navColorato)
            } else {
                setNavcolor(styles.nav)
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
                <ul className={styles.navBox}>
                    <li className={styles.navElement}> <Link className={styles.navLink} to='/' >Home</Link> </li>
                    <li className={styles.navElement}> <Link className={styles.navLink} to='/temperature' >Temperature</Link> </li>
                    <li className={styles.navElement}> <Link className={styles.navLink} to='/co2' >CO2</Link> </li>
                    <li className={styles.navElement}> <Link className={styles.navLink} to='/metano' >Metano</Link> </li>
                    <li className={styles.navElement}> <Link className={styles.navLink} to='/no2' >NO2</Link> </li>
                    <li className={styles.navElement}> <Link className={styles.navLink} to='/ghiacciopolare' >Ghiaccio Polare</Link> </li>
                </ul>
            </nav>

            <nav className={styles.responsiveNav} style={responsiveNavIsOpen ? openNavStyle : null}>
                <div className={styles.responsiveNavBox}>
                    <div className={styles.responsiveContainer}>
                        <h1 className={styles.navbarResponsiveTitle}>
                            YOUR WORLD
                        </h1>
                        <button className={styles.navButton} onClick={() => setResponsiveNavIsOpen(!responsiveNavIsOpen)}>
                            <img className={styles.hamburgerSvg} src={Hamburger} />
                        </button>
                    </div>

                    <ul className={styles.navBoxResponsiveLink} style={responsiveNavIsOpen ? openNavStyle : null} >
                        <li className={styles.navElementResponsive} onClick={closeAndScroll}> <Link className={styles.navLinkResponsive} to='/' >Home</Link> </li>
                        <li className={styles.navElementResponsive} onClick={closeAndScroll}> <Link className={styles.navLinkResponsive} to='/temperature' >Temperature</Link> </li>
                        <li className={styles.navElementResponsive} onClick={closeAndScroll}> <Link className={styles.navLinkResponsive} to='/co2' >CO2</Link> </li>
                        <li className={styles.navElementResponsive} onClick={closeAndScroll}> <Link className={styles.navLinkResponsive} to='/metano' >Metano</Link> </li>
                        <li className={styles.navElementResponsive} onClick={closeAndScroll}> <Link className={styles.navLinkResponsive} to='/no2' >NO2</Link> </li>
                        <li className={styles.navElementResponsive} onClick={closeAndScroll}> <Link className={styles.navLinkResponsive} to='/ghiacciopolare' >Ghiaccio Polare</Link> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
