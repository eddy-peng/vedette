import React from 'react';
import Milestone_1 from '../images/Milestone_1.svg';
import Milestone_2 from '../images/Milestone_2.svg';

export default function NotableMilestones() {
    return (
        <section className='page-section'>
            <div>
                <h2>Notable Milestones</h2>
                <p className='heading-caption'>The Vedette team has delivered several major deliverables to Google during the agile development process. Here are a couple!</p>
            </div>
            <div className='features-box milestone'>
                <div className='feature-container feature-container-gradient milestone'>
                    <div className='feature-content'>
                        <p className='feature-num'>MILESTONE 01</p>
                        <h3>MVP Video Demo</h3>
                        <p className='feature-desc'>Voiced by ElevenLabs’s AI voiceover software, the demo video turned heads during the capstone dry-run and internally at Google.</p>
                    </div>
                    <div className='milestone-img-right'>
                        <img src={Milestone_1} className='milestone-img '></img>
                    </div>
                </div>
                <div className='feature-container feature-container-gradient milestone'>
                    <div className='feature-content'>
                        <p className='feature-num'>MILESTONE 02</p>
                        <h3>The Live Solution</h3>
                        <p className='feature-desc'>Vedette 1.0 is a fully functioning product (with a narrowed scope), illustrating the capabilities of AI assistance at Google Android.</p>
                    </div>
                    <div className='milestone-img-left'>
                        <img src={Milestone_2} className='milestone-img'></img>
                    </div>
                </div>
            </div>
        </section>
    )
} 