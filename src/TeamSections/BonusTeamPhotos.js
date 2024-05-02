import React from 'react';
import ups from '../images/ups_printing.png';
import midpoint from '../images/mid_point.png';
import justburgers from '../images/just_burgers.png';
import firstmeet from '../images/first_meeting.png';


export default function BonusTeamPhotos() {
    return (
        <section className='page-section campus-visit'>
            <div>
                <h2>Bonus Team Photos</h2>
                <p className='heading-caption'>Throughout the six month project, work was intense. However, that didn’t stop us from having fun and taking a few pictures here and there!</p>
            </div>
            <div className='bonus-gallery-container'>
                <div className='bonus-gallery-row'>
                    <div className='bonus-img-and-caption'>
                        <div>
                            <img src={ups} alt=''></img>
                        </div>
                        <p className='feature-desc'>At the UPS store near the Google campus printing out interview protocols</p>
                    </div>
                    <div className='bonus-img-and-caption'>
                        <div>
                            <img src={firstmeet} alt=''></img>
                        </div>
                        <p className='feature-desc'>The first on-site at google was the first time some of us met since the project began</p>
                    </div>
                </div>
                <div className='bonus-gallery-row'>
                    <div className='bonus-img-and-caption'>
                        <div>
                            <img src={justburgers} alt=''></img>
                        </div>
                        <p className='feature-desc'>Having dinner at JustBurgers after our successful dry-run presentation</p>
                    </div>
                    <div className='bonus-img-and-caption'>
                        <div>
                            <img src={midpoint} alt=''></img>
                        </div>
                        <p className='feature-desc'>Letting loose in Capitol Hill after our final presentation of winter quarter</p>
                    </div>
                </div>
            </div>
        </section>
    )
}