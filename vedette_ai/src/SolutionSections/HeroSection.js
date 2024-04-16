import React from 'react';
import ProblemSVG from '../images/Problem.svg';

export default function HeroSection() {
    return (
        <section className='hero-section'>
            <h1>Introducing <span className='text-gradient'>Vedette 1.0</span></h1>
            <div className='hero-subsection'>
                <p className='sub-title'>Automating report deduplication on Google's Vulnerability <br></br> Reward Program for Bug Reporters</p>
                <div className='button-container'>
                    <a className='primary-button'>VIEW DEMO</a>
                    <a className='secondary-button'>LEARN MORE</a>
                </div>
            </div>
            <div className="hero-image-container">
                <img className='prob-svg' src={ProblemSVG}></img>
            </div>
        </section>
    )
}