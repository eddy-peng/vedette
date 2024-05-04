import React from 'react';

export default function TestTable() {
    return (
        <section className='page-section efficacy-table'>
            <h2>Vedette 1.0 Reliability</h2>
            <p className='heading-caption'>Championing continues learning, Vedette has proven to have high reliability compared to human attribute analysis.</p>
            <div className='table-container'>
                <div className='table-row'>
                    <p className='col-heading'>MEASURE</p>
                    <p className='col-heading-desc'>DESCRIPTION</p>
                    <p className='col-heading-vedette'>VEDETTE</p>
                    <p className='col-heading'>ANALYSTS</p>
                </div>
                <div className='table-row'>
                    <p className='row-title'>Inter-Rater Reliability
                        {/* <span class="material-symbols-outlined help-icon" 
                                    title="INSERT TOOLTIP DETAILS">
                                    help 
                        </span> */}
                    </p>
                    <p className='row-desc'>
                        Agreement between human analysts and Vedette in identifying bug report attributes. Value between -1 (no agreement) and 1 (perfect agreement). </p>
                    <p className='row-tester'> 0.40 </p>
                    <p className='row-tester-human'> 0.60 </p>
                </div>
                <hr className='table-line'></hr>
                {/* <div className='table-row'>
                    <p className='row-title'>
                        Overall Reliability */}
                        {/* <span class="material-symbols-outlined help-icon" 
                            title="INSERT TOOLTIP DETAILS">
                            help 
                        </span> */}
                    {/* </p>
                    <p className='row-desc'>Potter ipsum wand elf parchment wingardium. again silver wand duel umbridge hair mistletoe.</p>
                    <p className='row-tester'> 0.40 </p>
                    <p className='row-tester-human'> 0.60 </p>
                </div> */}
                {/* <hr className='table-line'></hr> */}
                <div className='table-row'>
                    <p className='row-title'>Deduplication Accuracy
                        {/* <span class="material-symbols-outlined help-icon" 
                                title="INSERT TOOLTIP DETAILS">
                                help 
                        </span> */}
                    </p>
                    <p className='row-desc'>Accuracy dervied from a ratio of Vedette's identified dupliecate reports over confirmed duplicate bug reports triaged by Google security analysts.</p>
                    <p className='row-tester'> 0.40 </p>
                    <p className='row-tester-human'> N/A </p>
                </div>
                <hr className='table-line'></hr>
                <div className='table-row'>
                    <p className='row-title'>Deduplication Speed
                        {/* <span class="material-symbols-outlined help-icon" 
                                title="INSERT TOOLTIP DETAILS">
                                help 
                        </span> */}
                    </p>
                    <p className='row-desc'>Average time to complete a duplicate status confirmation on an incoming bug report submission from the Vulnerability Rewards Program (VRP) platform.</p>
                    <p className='row-tester'> 3 Sec </p>
                    <p className='row-tester-human'> 3 Days </p>
                </div>
                <hr className='table-line'></hr>
            </div>
        </section>
    )
}

