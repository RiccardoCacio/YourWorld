import React from 'react'
import './footer.css'
import GithubSvg from '../../img/svg/github.svg'
import IgSvg from '../../img/svg/instagram.svg'
import LinkedinSvg from '../../img/svg/linkedin.svg'
const Footer = () => {
    return (
        <footer>
            <div className="colOne">
                <p className='footerText'> Copyright © 2023 - Your World -</p>
                <p className="footerText">Developed by Riccardo Cacio</p>
                <p className="footerText">Progetto finale Start2Impact</p>

            </div>
            <div className="colTwo">
                <a target='_blank' href="https://github.com/RiccardoCacio"><img src={GithubSvg} alt="" /></a>
                <a target='_blank' href="https://www.instagram.com/riccardo_cacio/"><img src={IgSvg} alt="" /></a>
                <a target='_blank' href="https://www.linkedin.com/in/riccardo-cacio-98713017a/"><img src={LinkedinSvg} alt="" /></a>
            </div>

            <div className="colTrhee">
                <p className='footerText'>Telefono +39 3917254971</p>
                <p className='footerText'>Mail riccardo1918@live.it  </p>
                <a target='_blank' className='s2iLink' href="https://talent.start2impact.it/profile/riccardo-cacio">
                    Profilo Start2Impact
                </a>
            </div>
        </footer>
    )
}

export default Footer
