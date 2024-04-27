import React from 'react';
import MilestoneCards from './MilestoneSections/MilestoneCards';
import NotableMilestones from './MilestoneSections/NotableMilestones';
import FutureActions from './MilestoneSections/FutureActions';

export default function MilestonePage() {
    return (
        <div>
            <MilestoneCards />
            <NotableMilestones />
            <FutureActions />
        </div>
    )
};