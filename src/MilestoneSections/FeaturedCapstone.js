import React from 'react';
import frontpage from'../images/frontpage.png';

export default function FeaturedCapstone() {
    return (
        <section className='page-section campus-visit'>
            <div>
                <h2>Featured On The Front Page</h2>
                <p className='heading-caption'>After being interviewed by the Information School, the team had their photos taken for an article published on the official website's front page. Click <a href="https://ischool.uw.edu/news/2024/06/informatics-students-help-google-improve-bug-reporting" target="_blank">here</a> to read the article.</p>
            </div>
            <div className="img-container woah-its-greg">
                <img src={frontpage} className='campus-visit-img omgomgomg' alt='A screenshot of the official information school website featuring the team'></img>
                <p className='feature-desc'>A screenshot of the iSchool's homepage with the article featuring the Vedette team front and center.</p>
            </div>
        </section>
    )
}