import React from 'react';
import threecircles from '../images/three_circles.svg';
import googlelogo from '../images/google_logo.svg';
import researchpapers from '../images/research_papers.svg';
import aiglitter from '../images/ai_glitter.svg';

export default function GuidingPrinciplesSection() {
    return (
        <section className='page-section guiding-principles'>
            <div>
                <h2>Our Guiding Principles</h2>
                <p className='heading-caption'>A series of design and ethical guidelines guided the creation of<br></br> Vedette to ensure equity and empowerment.</p>
            </div>
            <div className="principles-container">
                <div className="principles-row">
                    <div className="principle-square-card">
                        <div className='principle-content'>
                            <h3>Google AI Principles</h3>
                            <p className='principle-desc'>Vedette is rooted in Google’s chief AI principles, such as bias avoidance and social benefit.</p>
                            <br/>
                            <a>Learn More</a>
                        </div>
                        <div>
                            <img src={aiglitter} className='aiglitter-img-right'></img>
                        </div>
                    </div>
                    <div className="principle-rectangle-card">
                        <div className='principle-content'>
                            <h3>Cybersecurity AI Principles</h3>
                            <p className='principle-desc'>A collection of AI principles within the cybersecurity space were identified from established literature. These principles, including collaboration, human oversight, and explainability are core to Vedette.</p>
                            <br/>
                            <a>Learn More</a>
                        </div>
                        <div>
                            <img src={researchpapers} className='research-img-right'></img>
                        </div>
                    </div>
                </div>
                <div className="principles-row">
                    <div className="principle-rectangle-card">
                        <div className='principle-content principle-width-limit'>
                            <h3>Equity-Centered Design</h3>
                            <p className='principle-desc'>Equity-Centered Design (ECD) is a key framework for the team. Extending beyond human-centered design, ECD strives for more equitable outcomes that empower. Using ECD processes such as “equity pauses” and systems thinking, Vedette is elevated to a more equitable level.</p>
                            <br/>
                            <a>Learn More</a>
                        </div>
                        <div>
                            <img src={threecircles} className='threecircles-img-right'></img>
                        </div>
                    </div>
                    <div className="principle-square-card">
                        <div className='principle-content'>
                            <h3>Google Philosophy</h3>
                            <p className='principle-desc'>The baseline philosophical guidelines of Google, such as focusing on the user and “Don’t Be Evil” were core tenets of Vedette.</p>
                            <br/>
                            <a>Learn More</a>
                        </div>
                        <div>
                            <img src={googlelogo} className='google-img-right'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}