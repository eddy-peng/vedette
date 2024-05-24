import React from 'react';

export default function Challenges() {
    return (
        <section className='page-section'>
            <h2>
                Tackling Security Challenges Head-on
            </h2>
            <div className='challenge-container'>
                <div className='challenge-item'>
                    <div className='challenge-content'>
                        <p className='challenge-num'>01</p>
                        <p className='challenge-desc'>Duplicate threats slip through the system</p>
                    </div>
                </div>
                <div className='challenge-item'>
                    <div className='challenge-content'>
                        <p className='challenge-num'>02</p>
                        <p className='challenge-desc'>90% of threat reports are non-actionable</p>
                    </div>
                </div>
                <div className='challenge-item'>
                    <div className='challenge-content'>
                        <p className='challenge-num'>03</p>
                        <p className='challenge-desc'>Large cost in manual duplicate analysis</p>
                    </div>
                </div>
            </div>
        </section>
    )
}