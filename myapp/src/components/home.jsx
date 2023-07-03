import '../App.css';
// import { HashLink as Link } from 'react-router-hash-link';
import Me from '../images/frontend.png'
import Insta from '../images/instagram_2.png'
import Teleg from '../images/telegram_2.png'
import Linkedin from '../images/linkedin_2.png'
import Check from '../images/check.png'
import Quality from '../images/quality.png'
import Calendar from '../images/calendar.png'
import Web from '../images/web.png'
import Mobile from '../images/mobile.png'
import Market from '../images/analytics.png'
import Brand from '../images/identify.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

function Home() {
    const squares = [
        {
            img: Quality,
            name: 'Experience',
            value: '2 years'
        },
        {
            img: Calendar,
            name: 'Available',
            value: '30 hours a week'
        },
        {
            img: Check,
            name: 'Completed',
            value: '5+ projects'
        }
    ]
    const circles = [
        {
            title: 'Website Development',
            img: Web
        },
        {
            title: 'Mobile App Development',
            img: Mobile
        },
        {
            title: 'Market Analysis',
            img: Market
        },
        {
            title: 'Brand Identify',
            img: Brand
        }
    ]
    return (
        <>
        <div className="Socials animate__animated animate__fadeInLeft animate__delay-2s">
            <button><a target='blank' href='https://instagram.com/az1k_0922'><img src={Insta} alt="" /></a></button>
            <button><a href='https://t.me/coder_0922' target='blank'><img src={Teleg} alt="" /></a></button>
            <button><a href='https://www.linkedin.com/in/aziz-sharopov-7b6170227/' target='blank'><img src={Linkedin} alt="" /></a></button>
        </div>
        <div className="container-home">
        <div className="row">
            <div className="one animate__animated animate__fadeInLeft">
                <h1>Frontend Developer</h1>
                <p>I’m a self-taught talented and skilled developer, building<br></br> web in Javascript ecosystem since 2021.</p>
                <h2>Azizbek Sharopov</h2>
                <Link to="/contact#con"><button>Contact Us</button></Link>
            </div>
            <img className='animate__animated animate__fadeInRight' src={Me} alt="" />
        </div>  
        <div className="home_row">
            {squares.length > 0 &&
            squares.map((square, index) => (
            <div className="square animate__animated animate__bounce animate__delay-2s" key={index}>
                <img src={square.img} alt="" />
                <h2>{square.name}</h2>
                <h3>{square.value}</h3>
            </div>)
            )}
        </div>
         <div className="section_2">
        <p>My journey started in 2021 with learning <span style={{color:'green'}}>html,</span> <span style={{color:'blue'}}>css</span>, <span style={{color:'#DC1F1F'}}>javascript</span> on my own.</p>
        <p>In 2022, my serious web development career began with <span style={{color:'#DC1F1F'}}>Reactjs.</span></p>
        <p>I’m a big <span style={{color:'#DC1F1F'}}>javascript</span> enthusiast and built my skills on top of it. I always 
            try to be up-to-date with what’s happening in its ecosystem. I explore & try 
            new features, technologies that looks interesting and helpful. If i find a technology 
            that feels futuristic and introduces better solutions for common problems, most importantly 
            gives the best DX and great performance, I get so passionate to learn and extend my skillset.I’m 
            always exploring and mastering my skills to enjoy developing better than yesterday.</p>
            <button className='resume'><a href='https://www.linkedin.com/in/aziz-sharopov-7b6170227/' target='blank'>View Resume</a></button>
            </div>
            <div className="services">
            <h2>My Best Services</h2>
            <div className="Row">
                {circles.length > 0 &&
                circles.map((circle, index) => (
                    <div className="square" key={index}>
                    <img src={circle.img} alt="" />
                    <h3>{circle.title}</h3>
                </div>
                ))
                }
            </div>
            </div>
            <div className="carousel">
            <h2>What My Clients Say</h2>
            <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
      <div>
        <p>“The task was completed very quickly and efficiently. All edits were made promptly. We are planning further work.”</p>
        <img src={require('../images/alex.jpg')} alt="" />
                <p>Alexander B.</p>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <p>“Azizbek is a good developer! He did the task within the given time with no problems whatsoever.”</p>
        <img src={require('../images/anton.png')} alt="" />
                <p>Anton N.</p>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <p>“Azizbek was very helpful and fast to respond to my inquiry to help with Wordpress website issues. His knowledge was comprehensive.”</p>
        <img src={require('../images/daniel.jpg')} alt="" />
                <p>Daniel S.</p>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <p>“Azizbek is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.”</p>
        <img src={require('../images/sergei.jpg')} alt="" />
                <p>Sergei B.</p>
            </div>
      </SwiperSlide>
    </Swiper>
            </div>
            </div>
            </>
    )
}

export default Home