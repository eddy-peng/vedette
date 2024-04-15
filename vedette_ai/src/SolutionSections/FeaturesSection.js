import React from 'react';
import FeatureOneImg from '../images/Feature_1.svg'

export default function Features() {
    return (
        <section className='page-section'>
            <h2>
                The Capabilities Of Vedette
            </h2>
            <p className='heading-caption'>Integrating AI into the Vulnerability Reward<br></br>Program’s bug reporting form</p>
            <div>
                <div className='feature-container'>
                    <div className='feature-content'>
                        <p className='feature-num'>FEATURE 01</p>
                        <h3>Compare report content to previously triaged threats</h3>
                        <p className='feature-desc'>Bug Reporters can learn how their bug report may be a duplicate across relevant threat attributes to pivot or terminate the report.</p>
                    </div>
                    <img src={FeatureOneImg}>
                    </img>

                </div>
            </div>
        </section>
    )
}