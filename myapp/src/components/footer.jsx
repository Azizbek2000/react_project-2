import '../App.css';
import { ReactComponent as Telegram } from '../images/telegram.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Github } from '../images/github.svg'
import { ReactComponent as Instagram } from '../images/instagram.svg'

export default function Footer(){
    const date = new Date()
    return(
        <div className='footer'>
            <div className='links'>
                <button><a target='blank' href='https://t.me/coder_0922'><Telegram /></a></button>
                <button><a target='blank' href='https://www.linkedin.com/in/aziz-sharopov-7b6170227/'><Linkedin /></a></button>
                <button><a target='blank' href='https://github.com/Azizbek2000'><Github /></a></button>
                <button><a target='blank' href='https://www.instagram.com/az1k_0922/'><Instagram /></a></button>
            </div>
            <h3>© Copyright {date.getFullYear()}. All rights reserved</h3>
        </div>
    )
}