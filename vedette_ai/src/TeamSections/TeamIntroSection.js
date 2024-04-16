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
        <section className='team-intro'>
            <div className="intro-text">
                <h3>The <span className="text-gradient">People</span> Behind Vedette</h3>
                <p>Vedette was made possible through the collaborative efforts of Google Android Security and five extremely talented students from the University of Washington’s Information School.</p>
            </div>
            <div className="team-profile-container">
                <div className="team-profile">
                    <img src={captain}></img>
                    <h4>Eddy Peng</h4>
                    <p>Manager, Designer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <img src={linkedin}></img>
                        </div>
                        <div className="social-icons">
                            <img src={internet}></img>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={cook}></img>
                    <h4>Sami Foell</h4>
                    <p>Researcher, Designer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <img src={linkedin}></img>
                        </div>
                        <div className="social-icons">
                            <img src={internet}></img>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={unicorn}></img>
                    <h4>Hitanshu Prajapati</h4>
                    <p>Full-Stack Engineer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <img src={linkedin}></img>
                        </div>
                        <div className="social-icons">
                            <img src={github}></img>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={celebrity}></img>
                    <h4>Kyle Raychel</h4>
                    <p>Back-end Engineer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <img src={linkedin}></img>
                        </div>
                        <div className="social-icons">
                            <img src={github}></img>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <img src={hman}></img>
                    <h4>Harold Pham</h4>
                    <p>Back-end Engineer</p>
                    <div className="icon-container">
                        <div className="social-icons">
                            <img src={linkedin}></img>
                        </div>
                        <div className="social-icons">
                            <img src={github}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}