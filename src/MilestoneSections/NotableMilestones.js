import React from 'react';
import googlelogo from '../images/google_logo.svg';
import vedette_icon from '../images/vedette_favicon.svg';
import youtube_logo from '../images/youtube_logo.svg';
import prompt_engineering from '../images/prompt_engineering.svg';

export default function NotableMilestones() {
    return (
        <section className='page-section'>
            <div>
                <h2>Project Milestones</h2>
                <p className='heading-caption'>The Vedette team has several memorable moments during the agile development process. Here are a few!</p>
            </div>
            <div className="principles-container">
                <div className="principles-row">
                    <div className="principle-square-card">
                        <div className='principle-content'>
                            <h3>Solution Initialized</h3>
                            <p className='principle-desc'>A memorable moment came after the team’s first on-site at Google. Where during ideation, Vedette was conceived.</p>
                        </div>
                        <div>
                            <img src={vedette_icon} className='aiglitter-img-right vedette-icon-img' alt='The modified verion of the Bug Reporting VRP Logo'></img>
                        </div>
                    </div>
                    <div className="principle-rectangle-card">
                        <div className='principle-content principle-width-limit'>
                            <h3>MVP Video Demo</h3>
                            <p className='principle-desc'>Voiced by ElevenLabs’s AI voiceover software, the MVP demo video was meticulously edited, resulting in heads being turned during the capstone dry-run and internally at Google.</p>
                            <br/>
                            <a href='https://youtu.be/lXVBjWtMLxo' target="_blank" rel="noopener noreferrer">Watch Now</a>
                        </div>
                        <div>
                            <img src={youtube_logo} className='threecircles-img-right youtube-logo-img' alt='The Youtube Logo'></img>
                        </div>
                    </div>
                </div>
                <div className="principles-row">
                    <div className="principle-rectangle-card">
                        <div className='principle-content principle-width-limit'>
                            <h3>Prompt Engineering</h3>
                            <p className='principle-desc'>After many rounds of trial and error, our prompts to ChatGPT’s API were able to extract the relevant attributes from the data.</p>
                        </div>
                        <div>
                            <img src={prompt_engineering} className='threecircles-img-right prompt-engineering-img' alt='A box with three arrows coming out of it'></img>
                        </div>
                    </div>
                    <div className="principle-square-card the-milestone-one">
                        <div className='principle-content'>
                            <h3>Hand-off</h3>
                            <p className='principle-desc'>Summarizing the complex project into a 40+ page, palatable story for our sponsor and other Googlers who are new to the project.</p>
                        </div>
                        <div>
                            <img src={googlelogo} className='google-img-right' alt='Google Logo'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 