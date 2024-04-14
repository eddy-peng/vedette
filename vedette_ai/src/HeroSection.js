import React from 'react';
import PrimaryBtn from './Components/PrimaryBtn';

export default function HeroSection() {
    return (
        <section className='hero-section'>
            <h1>Welcome to <span className='text-gradient'>Vedette 1.0</span></h1>
            <div className='hero-subsection'>
                <p className='sub-title'>Automating report deduplication on Google's Vulnerability <br></br> Reward Program for Bug Reporters</p>
                <div className='button-container'>
                    <PrimaryBtn />
                    <a className='secondary-button'>LEARN MORE</a>
                </div>
            </div>
            <img src='images/Problem.svg'></img>
        </section>
    )
}