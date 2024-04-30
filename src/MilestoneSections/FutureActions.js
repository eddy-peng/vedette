import React from 'react';
import GPTImg from '../images/GPT.svg';
import AndroidImg from '../images/Android.svg';
import VRPImg from '../images/VRP_shape.svg';

export default function FutureActions() {
    return (
        <section className='page-section bottom'>
            <div>
                <h2>Future Actions</h2>
                <p className='heading-caption'>Vedette shows great promise in further application within Google’s growing cybersecurity and AI space.</p>
            </div>
            <div className='three-features milestone'>
                    <div className='feature-container-three feature-container-gradient'>
                        <div className='feature-content'>
                            <p className='feature-num'>ACTION 01</p>
                            <h3>Chat GPT 4 Experimentation</h3>
                            <p className='feature-desc'>Vedette uses Chat GPT 3.5 as its AI Model. Chat GPT 4 could be explored to compare effectiveness.</p>
                        </div>
                        <div>
                            <img src={GPTImg} className='next-step-img-left' alt='OpenAI logo'></img>
                        </div>
                    </div>
                    <div className='feature-container-three'>
                        <div className='feature-content'>
                            <p className='feature-num'>ACTION 02</p>
                            <h3>Utilization Of Android VRP Reports</h3>
                            <p className='feature-desc'>Though Vedette uses open-source Chromium reports for data, it can use Android reports after adjustments.</p>
                        </div>
                        <div>
                            <img src={AndroidImg} className='next-step-img-center' alt='Android Logo'></img>
                        </div>
                    </div>
                    <div className='feature-container-three'>
                        <div className='feature-content'>
                            <p className='feature-num'>ACTION 03</p>
                            <h3>Usability Testing On Bug Reporters</h3>
                            <p className='feature-desc'>Connecting with Bug Reporters is out of project scope. However, being the primary users of Vedette, it is a must.</p>
                        </div>
                        <div>
                            <img src={VRPImg} className='next-step-img-right' alt='Geometric illustration'></img>
                        </div>
                    </div>
                </div>
        </section>
    )
}