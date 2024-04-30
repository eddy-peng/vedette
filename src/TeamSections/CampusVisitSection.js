import React from 'react';
import campusvisits from '../images/campus_visits.png';


export default function CampusVisitSection() {
    return (
        <section className='page-section campus-visit'>
            <div>
                <h2>Google Campus Visits</h2>
                <p className='heading-caption'>Throughout the creation of Vedette, several workshops at the Google campus in Kirkland, WA were conducted alongside the Android Security Team to learn, build, and connect.</p>
            </div>
            <div className="img-container">
                <img src={campusvisits} className='campus-visit-img'></img>
            </div>
        </section>
    )
}