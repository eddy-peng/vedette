import React from 'react';


export default function GuidingPrinciplesSection() {
    return (
        <section className='guiding-principles'>
            <div className="intro-text">
                <h3>Our Guiding Principles</h3>
                <p>A series of design and ethical guidelines guided the creation of Vedette to ensure equity and empowerment.</p>
            </div>
            <div className="principles-container">
                <div className="principles-row">
                    <div className="principle-square-card"></div>
                    <div className="principle-rectangle-card"></div>
                </div>
                <div className="principles-row">
                    <div className="principle-rectangle-card"></div>
                    <div className="principle-square-card"></div>
                </div>
            </div>
        </section>
    )
}