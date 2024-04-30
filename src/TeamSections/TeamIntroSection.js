import React from 'react';
import celebrity from '../images/celebrity.png';
import hman from '../images/hman.png';
import unicorn from '../images/unicorn.png';
import captain from '../images/captain.png';
import cook from '../images/cook.png';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import internet from '../images/internet.svg';


export default function TeamIntroSection() {
    return (
        // <section className='team-intro'>
        <section className='page-section'>
            {/* <div className="intro-text"> */}
            <div className="people-heading">
                {/* <h3>The <span className="text-gradient">People</span> Behind Vedette</h3> */}
                <h2>The <span className="text-gradient spacer-both">People</span> Behind Vedette</h2>
                <p className='heading-caption'>Vedette was made possible through the collaborative efforts of Google Android Security and five extremely talented students from the University of Washington’s Information School.</p>
            </div>
            <div className="team-profile-container">
                <div className="team-profile">
                    <img src={captain}></img>
                    <h4>Eddy Peng</h4>
                    <p>Manager, Designer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <a href='https://www.linkedin.com/in/eddy-peng/' target="_blank" rel="noopener noreferrer">
                                <img src={linkedin}></img>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a href='https://eddypeng.com/index.html' target="_blank" rel="noopener noreferrer">
                                <img src={internet}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={cook}></img>
                    <h4>Sami Foell</h4>
                    <p>Researcher, Designer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <a href='https://www.linkedin.com/in/sami-foell/' target="_blank" rel="noopener noreferrer">
                                <img src={linkedin}></img>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a href='https://www.samifoell.com/' target="_blank" rel="noopener noreferrer">
                                <img src={internet}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={unicorn}></img>
                    <h4>Hitanshu Prajapati</h4>
                    <p>Full-Stack Engineer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <a href='https://www.linkedin.com/in/hitanshu-prajapati/' target="_blank" rel="noopener noreferrer">
                                <img src={linkedin}></img>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a href='https://github.com/HitanshuPrajapati' target="_blank" rel="noopener noreferrer">
                                <img src={github}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={celebrity}></img>
                    <h4>Kyle Raychel</h4>
                    <p>Back-end Engineer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <a href='https://www.linkedin.com/in/kyle-raychel/' target="_blank" rel="noopener noreferrer">
                                <img src={linkedin}></img>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a href='https://github.com/kyleraychel' target="_blank" rel="noopener noreferrer">
                                <img src={github}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={hman}></img>
                    <h4>Harold Pham</h4>
                    <p>Back-end Engineer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                        <a href='https://www.linkedin.com/in/harold-pham-60b201177/' target="_blank" rel="noopener noreferrer">
                            <img src={linkedin}></img>
                        </a>
                        </div>
                        <div className="social-icons">
                            <a href='https://github.com/HaroldPham' target="_blank" rel="noopener noreferrer">
                            <img src={github}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </section >
    )
}