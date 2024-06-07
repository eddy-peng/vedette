import React from 'react';
import innovationaward from'../images/innovationaward.jpg';

export default function AwardWinning() {
    return (
        <section className='page-section campus-visit'>
            <div>
                <h2>Innovation Award Winners</h2>
                <p className='heading-caption'>Vedette was nominated for the innovation and research awards. Awards are limited to one per team, and Vedette walked home with the innovation award. Click <a href="https://ischool.uw.edu/news/2024/06/students-show-real-world-impact-capstone-projects" target="_blank">here</a> to learn more about the extravagant night.</p>
            </div>
            <div className="img-container woah-its-greg">
                <img src={innovationaward} className='campus-visit-img' alt='Project team at the capstone gala holding the innovation award certificates'></img>
                <p className='feature-desc'>The Vedette team with their innovation award certificates during the iSchool Capstone Gala night.</p>
            </div>
        </section>
    )
}