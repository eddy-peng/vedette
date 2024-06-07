import React from 'react';
import MilestoneCards from './MilestoneSections/MilestoneCards';
import NotableMilestones from './MilestoneSections/NotableMilestones';
import FutureActions from './MilestoneSections/FutureActions';
import AwardWinning from './MilestoneSections/AwardWinning';
import FeaturedCapstone from './MilestoneSections/FeaturedCapstone';

export default function MilestonePage() {
    return (
        <div>
            <MilestoneCards />
            <FeaturedCapstone />
            <AwardWinning />
            <NotableMilestones />
            <FutureActions />
        </div>
    )
};