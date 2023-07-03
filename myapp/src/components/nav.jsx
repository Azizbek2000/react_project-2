import { Link } from 'react-router-dom';
import { ReactComponent as Sun } from '../images/Sun.svg';
import { ReactComponent as Moon } from '../images/Moon.svg';
import { ReactComponent as Burger } from '../images/burger.svg';
import { ReactComponent as Close } from '../images/close-2.svg';
// import Teleg from '../images/telegram_2.png'
// import Insta from '../images/instagram_2.png'
// import React, { useState } from 'react';
import '../App.css';

const Header = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    };
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    };
  
   function moon(e) {
    if (e.target.chekced){ 
        setLightMode();
       }
       else setDarkMode()
    localStorage.setItem('selectedTheme', 'dark')
    document.getElementById('moon').classList.add('active');
    document.getElementById('sun').classList.remove('active')
    }

    const sun = (e) => {
        if (e.target.chekced) setDarkMode();
        else setLightMode()
        localStorage.setItem('selectedTheme', 'light')
        document.getElementById('moon').classList.remove('active');
        document.getElementById('sun').classList.add('active')
    }
    const selectedTheme = localStorage.getItem('selectedTheme')
    
    if (selectedTheme === 'dark') {
        // document.getElementById('moon').remove();
        // document.getElementById('sun').classList.remove('active')
        setDarkMode()
    }

    function mobile() {
        setTimeout(() => {
         document.getElementById('mobile').classList.add('show');
        }, 500);
    }
    function mobile_hide() {
        setTimeout(() => {
            document.getElementById('mobile').classList.remove('show');
        }, 500);
        
    }

    const sun_class = 'active sun_button'
    const moon_class = 'none moon_button'

    return (
        <>
        <div className='Navbar'>
            <Link to='/'>Uzum</Link>
            <div className='titles'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <a className='nav_number' href="tel:+998912460922">+998(91)246-09-22</a>
        <div className="dark_mode">
        <button className={moon_class} id='moon' onClick={moon}><Moon /></button>  
       <button id='sun' className={sun_class} onClick={sun}><Sun /></button>  
       </div>
        </div>
        <div className="mobile_nav">
        <Link className='mobile-logo' to='/'>Uzum</Link>
        <div className='mobile-div'>
        <a className='nav_number' href="tel:+998912460922">+998(91)246-09-22</a>
        <button onClick={mobile} className='burger-button'><Burger className="burger" /></button>
        </div>
        </div>
        <div className="mobile-main" id='mobile'>
        <div className="mobile_nav">
        <Link className='mobile-logo' to='/'>Uzum</Link>
        <div className='mobile-div'>
        <div className="dark_mode">
        <button className={moon_class} id='moon' onClick={moon}><Moon /></button>  
       <button id='sun' className={sun_class} onClick={sun}><Sun /></button>  
       </div>
        <button onClick={mobile_hide} className='burger-button'><Close className="close" /></button>
        </div>
        </div>
        <ul className='mobile-ul'>
                <li onClick={mobile_hide}><Link to='/'>Home</Link></li>
                <li onClick={mobile_hide}><Link to='/about'>About</Link></li>
                <li onClick={mobile_hide}><Link to='/portfolio'>Portfolio</Link></li>
                <li onClick={mobile_hide}><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="social-main">
            <a href='https://t.me/coder_0922' target='blank'><img alt='' src={require('../images/telegram_2.png')} /></a>
            <a target='blank' href='https://instagram.com/az1k_0922'><img alt='' src={require('../images/instagram_2.png')} /></a>
            <a href='https://www.linkedin.com/in/aziz-sharopov-7b6170227/' target='blank'><img alt='' src={require('../images/linkedin_2.png')} /></a>
            </div>
        </div>
        </>
    )
}

export default Header