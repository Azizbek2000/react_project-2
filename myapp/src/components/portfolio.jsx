import React, { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Kalei from '../images/kalei.png'
import Kamni from '../images/kamni.png'
import Kovka from '../images/kovka.png'
import Tech from '../images/tech.png'
import Strike from '../images/strike.png'

export default function Portfolio() {
    useEffect(()=> {
        document.title = 'Portfolio'
    })
    const portfolios = [
        {
            img: Kovka,
            name: 'Kovka-tut.ru',
            link: 'https://kovka-tut.ru'
        },
        {
            img: Kalei,
            name: 'Kaleidoscopefoto.ru',
            link: 'https://kaleidoscopefoto.ru'
        },
        {
            img: Kamni,
            name: 'Kamni.site',
            link: 'https://kamni.site' 
        },
        {
            img: Tech,
            name: "Techservice",
            link: 'http://holodilnik-rem.ru'
        },
        {
            img: Strike,
            name: "Strike",
            link: 'http://sv01.mcdir.me/'
        }
    ]
    return (
        <>
        <div className="container-home">
       <div className="portfolio">
        <h1 className="p_title animate__animated animate__fadeInLeft">My Latest Project</h1>
        <div className="project_rows animate__animated animate__fadeInUp">
            {portfolios.length > 0 && 
            portfolios.map((portfolio, index) => (
                <div className="project" key={index}>
              <img src={portfolio.img} alt="" />
              <h2 className="project_title">{portfolio.name}</h2>
              <a className="p_link" href={portfolio.link} target="blank">View demo</a>
          </div>
            )) 
            }
        </div>
       </div>
       </div>
       <div className="hire me">
            <h1 className="animate__animated animate__bounceIn animate__delay-2s">Interested in working with me?</h1>
           <Link to="/contact#con"><button className="animate__animated animate__bounceIn animate__delay-3s">Hire me</button></Link>
        </div>
        </>
    )
}