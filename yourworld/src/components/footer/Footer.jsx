import React from 'react'
import GithubSvg from '../../img/svg/github.svg'
import IgSvg from '../../img/svg/instagram.svg'
import LinkedinSvg from '../../img/svg/linkedin.svg'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={styles.colOne}>
                <p className={styles.footerText}> Copyright © 2023 - Your World -</p>
                <p className={styles.footerText}>Developed by Riccardo Cacio</p>
                <p className={styles.footerText}>Progetto finale Start2Impact</p>

            </div>
            <div className={styles.colTwo}>
                <a target='_blank' href="https://github.com/RiccardoCacio"><img src={GithubSvg} alt="" /></a>
                <a target='_blank' href="https://www.instagram.com/riccardo_cacio/"><img src={IgSvg} alt="" /></a>
                <a target='_blank' href="https://www.linkedin.com/in/riccardo-cacio-98713017a/"><img src={LinkedinSvg} alt="" /></a>
            </div>

            <div className={styles.colTrhee}>
                <p className={styles.footerText}>Telefono +39 3917254971</p>
                <p className={styles.footerText}>Mail riccardo1918@live.it  </p>
                <a target='_blank' className={styles.s2iLink} href="https://talent.start2impact.it/profile/riccardo-cacio">
                    Profilo Start2Impact
                </a>
            </div>
        </footer>
    )
}

export default Footer
