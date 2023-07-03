import React, { useEffect } from "react";
import '../App.css';
// import 'animate.css';
import Coder from '../images/coder.png'

export default function About() {
    useEffect(()=> {
        document.title = 'About'
    })
    const brands = [
        {
            img: <img src={require('../images/kwork.png')} alt="" />
        },
        {
            img: <img src={require('../images/upwork.png')} alt="" />
        },
        {
            img: <img src={require('../images/freelance.png')} alt="" />
        },
        {
            img: <img src={require('../images/fiverr2.png')} alt="" />
        },
        {
            img: <img src={require('../images/toptal.png')} alt="" />
        },
        {
            img: <img src={require('../images/itpark.png')} alt="" />
        },
        {
            img: <img src={require('../images/linkedin_service.png')} alt="" />
        },
        {
            img: <img src={require('../images/themeforest.png')} alt="" />
        },

    ]
    return (
   <div className="container-home">
        <div className="about">
            <div className="animate__animated animate__fadeInLeft">
                <p>About me</p>
        <h1>Know Me More</h1>
        <p>I'm web developer, and I'm very passionate and dedicated to my work. With 2 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
        </div>
        <div>
        <img  className="animate__animated animate__fadeInRight" src={Coder} alt="" />
        </div>
        </div>
        <h1 className="skills_title">Let Know My Skills</h1>
            <div className="progress animate__animated animate__slideInLeft animate__delay-2s">
                <div>
        <h4>HTML</h4>
        <div className="progress_bar">
            <div></div>
        </div>
        <h4>CSS</h4>
        <div className="progress_bar">
            <div></div>
        </div>
        <h4>Bootstrap</h4>
        <div className="progress_bar">
            <div style={{width:"75%"}}></div>
        </div>
        <h4>Javascript</h4>
        <div className="progress_bar">
            <div style={{width:"75%"}}></div>
        </div>
        </div>
        <div>
        <h4>React</h4>
        <div className="progress_bar">
            <div style={{width:'85%'}}></div>
        </div>
        <h4>Wordpress</h4>
        <div className="progress_bar">
            <div style={{width:'85%'}}></div>
        </div>
        <h4>Tilda</h4>
        <div className="progress_bar">
            <div style={{width:'85%'}}></div>
        </div>
        <h4>Web Design</h4>
        <div className="progress_bar">
            <div style={{width:'60%'}}></div>
        </div>
        </div>
        <img src="" alt="" />
        </div>
        <h1 className="expertses_title animate__animated animate__fadeInLeft animate__delay-3s">My Expertses</h1>
        <div className="expertses">
            <div className="experience">
                <h2 className="animate__animated animate__fadeInLeft animate__delay-3s">My Experience</h2>
                <div className="animate__animated animate__fadeInLeft animate__delay-3s">
                    <h3>Frontend Developer</h3>
                    <p>2021 - 2023 | Kwork</p>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                </div>
                <div className="animate__animated animate__fadeInLeft animate__delay-3s">
                    <h3>Wordpress Developer</h3>
                    <p>2022 - 2023 | Kwork</p>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                </div>
            </div>
            <div className="experience">
               <h2 className="animate__animated animate__fadeInRight animate__delay-3s">My Education</h2>
               <div className="animate__animated animate__fadeInRight animate__delay-3s">
                    <h3>Frontend Developer</h3>
                    <p>2021 | Bukhara It-Park</p>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                </div>
                <div className="animate__animated animate__fadeInRight animate__delay-3s">
                    <h3>Backend Developer</h3>
                    <p>2022 | Bukhara It-Park</p>
                    <p>Collaborate with creative and development teams on the execution of ideas.</p>
                </div>
                </div>
        </div>
        <div className="brands">
            {brands.length > 0 &&
            brands.map((brand, index) => (
                <div className="brand" key={index}>
                {brand.img}
            </div>
            ))
            }
        </div>
        </div>
    )
}