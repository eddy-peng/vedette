import React from 'react';
import FeatureOneImg from '../images/Feature_1.svg';
import FeatureTwoImg from '../images/Feature_2.svg';
import FeatureThreeImg from '../images/Feature_3.svg';

export default function Features() {
    return (
        <section className='page-section'>
            <h2>
                The Capabilities Of Vedette
            </h2>
            <p className='heading-caption'>Integrating AI into the Vulnerability Reward<br></br>Program’s bug reporting form</p>
            <div className='features-box'>
                <div className='feature-container'>
                    <div className='feature-content'>
                        <p className='feature-num'>FEATURE 01</p>
                        <h3>Compare report content to previously triaged threats</h3>
                        <p className='feature-desc'>Bug Reporters can learn how their bug report may be a duplicate across relevant threat attributes to pivot or terminate the report.</p>
                    </div>
                    <div>
                        <img src={FeatureOneImg} className='feature-img'></img>
                    </div>
                </div>
                <div className='two-features'>
                    <div className='feature-container-two'>
                        <div className='feature-content'>
                            <p className='feature-num'>FEATURE 02</p>
                            <h3>Explore curated historical bug reports with similar content </h3>
                            <p className='feature-desc'>Bug Reporters may view historical reports with similar content to their own, with similarity percentages and metadata to assist their selection of reports to explore.</p>
                        </div>
                        <div>
                            <img src={FeatureTwoImg} className='feature-img'></img>
                        </div>
                    </div>
                    <div className='feature-container-two'>
                        <div className='feature-content'>
                            <p className='feature-num'>FEATURE 03</p>
                            <h3>Receive dynamic content similarity updates in real time </h3>
                            <p className='feature-desc'>BBug Reporters are notified whenever their report passes a similarity threshold, prompting them to learn more about why their report may be a duplicate.</p>
                        </div>
                        <div>
                            <img src={FeatureThreeImg} className='feature-img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}