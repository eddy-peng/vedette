import React from 'react';
import FeatureOneImg from '../images/Feature_1.svg';
import FeatureTwoImg from '../images/Feature_2.svg';
import FeatureThreeImg from '../images/Feature_3.svg';
import FeatureFourImg from '../images/Feature_4.svg';
import FeatureFiveImg from '../images/Feature_5.svg';
import FeatureSixImg from '../images/Feature_6.svg';

export default function Features() {
    return (
        <section className='page-section' id='features'>
            <h2>
                The Capabilities Of Vedette
            </h2>
            <p className='heading-caption'>Integrating AI into the Vulnerability Reward Program’s bug reporting form</p>
            <div className='features-box'>
                <div className='feature-container feature-container-gradient'>
                    <div className='feature-content'>
                        <p className='feature-num'>FEATURE 01</p>
                        <h3>Compare report content to previously triaged threats</h3>
                        <p className='feature-desc'>Bug Reporters can learn how their bug report may be a duplicate across relevant threat attributes to pivot or terminate the report.</p>
                    </div>
                    <div className='feature-img'>
                        <img src={FeatureOneImg} className="feature-img-one" alt='Report comparison UI'></img>
                    </div>
                </div>
                <div className='two-features'>
                    <div className='feature-container-two feature-container-gradient'>
                        <div className='feature-content'>
                            <p className='feature-num'>FEATURE 02</p>
                            <h3>Explore curated historical bug reports with similar content </h3>
                            <p className='feature-desc'>Bug Reporters may view historical reports with similar content to their own, with similarity percentages and metadata to assist their selection of reports to explore.</p>
                        </div>
                        <div className='feature-img-two'>
                            <img src={FeatureTwoImg} className='feature-img' alt='Similar reprot table UI'></img>
                        </div>
                    </div>
                    <div className='feature-container-two'>
                        <div className='feature-content'>
                            <p className='feature-num'>FEATURE 03</p>
                            <h3>Receive dynamic content similarity updates in real time </h3>
                            <p className='feature-desc'>Bug Reporters are notified whenever their report passes a similarity threshold, prompting them to learn more about why their report may be a duplicate.</p>
                        </div>
                        <div className='feature-img-three'>
                            <img src={FeatureThreeImg} className='feature-img' alt='Similarity scores UI'></img>
                        </div>
                    </div>
                </div>
                <div className='three-features'>
                    <div className='feature-container-three feature-container-gradient'>
                        <div className='feature-content'>
                            <p className='feature-num'>FEATURE 04</p>
                            <h3>Score Guide</h3>
                            <p className='feature-desc'>Bug Reporters are provided a detailed breakdown of how Vedette calculates similarity scores.</p>
                        </div>
                        <div>
                            <img src={FeatureFourImg} className='feature-four-img' alt='Vedette score guide screenshot'></img>
                        </div>
                    </div>
                    <div className='feature-container-three'>
                        <div className='feature-content'>
                            <p className='feature-num'>FEATURE 05</p>
                            <h3>Export Reports</h3>
                            <p className='feature-desc'>Bug Reporters can export similar reports in various formats to conduct further analysis independently.</p>
                        </div>
                        <div>
                            <img src={FeatureFiveImg} className='feature-five-img' alt='Report export options diagram'></img>
                        </div>
                    </div>
                    <div className='feature-container-three'>
                        <div className='feature-content'>
                            <p className='feature-num'>FEATURE 06</p>
                            <h3>Progress Upgrades</h3>
                            <p className='feature-desc'>Bug Reporters receive field to field similarity scores integrated in the side bar for deeper insights.</p>
                        </div>
                        <div>
                        <img src={FeatureSixImg} className='feature-img-center feature-six-img' alt='VRP progress bar UI'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}