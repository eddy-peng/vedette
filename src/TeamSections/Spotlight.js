import React from 'react';
import finalpresentation from '../images/finalpresentation.png';


export default function Spotlight() {
    return (
        <section className='page-section campus-visit'>
            <div>
                <h2>Sponsor Spotlight</h2>
                <p className='heading-caption'>Vedette is where it is today due to the strong partnership between the team and Greg Wroblewski (the project's sponsor), who encouraged us to let all our skill sets shine during the project.</p>
            </div>
            <div className="img-container woah-its-greg">
                <img src={finalpresentation} className='campus-visit-img' alt='The Team and sponsor Greg after the final onsite presentation at Google'></img>
                <p className='feature-desc'>The Vedette team with Greg Wroblewski, the sponsor of the capstone project and senior engineer at Google.</p>
            </div>
        </section>
    )
}