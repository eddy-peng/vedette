import React from 'react';
import campusvisits from '../images/campus_visits.png';


export default function CampusVisitSection() {
    return (
        <section className='campus-visit'>
            <div className="intro-text">
                <h3>Google Campus Visits</h3>
                <p>Throughout the creation of Vedette, several workshops at the Google campus in Kirkland, WA were conducted alongside the Android Security Team to learn, build, and connect.</p>
            </div>
            <div className="img-container">
                <img src={campusvisits}></img>
            </div>
        </section>
    )
}