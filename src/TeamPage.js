import React from 'react';
import TeamIntroSection from './TeamSections/TeamIntroSection';
import CampusVisitSection from './TeamSections/CampusVisitSection';
import GuidingPrinciplesSection from './TeamSections/GuidingPrinciplesSection';

export default function TeamPage() {
    return (
        <div>
            <TeamIntroSection />
            <GuidingPrinciplesSection />
            <CampusVisitSection />
        </div>
    )
}