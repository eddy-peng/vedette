import React from 'react';
import TeamIntroSection from './TeamSections/TeamIntroSection';
import CampusVisitSection from './TeamSections/CampusVisitSection';
import GuidingPrinciplesSection from './TeamSections/GuidingPrinciplesSection';
import BonusTeamPhotos from './TeamSections/BonusTeamPhotos';

export default function TeamPage() {
    return (
        <div>
            <TeamIntroSection />
            <GuidingPrinciplesSection />
            <CampusVisitSection />
            <BonusTeamPhotos />
        </div>
    )
}