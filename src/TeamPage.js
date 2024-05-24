import React from 'react';
import TeamIntroSection from './TeamSections/TeamIntroSection';
import CampusVisitSection from './TeamSections/CampusVisitSection';
import GuidingPrinciplesSection from './TeamSections/GuidingPrinciplesSection';
import BonusTeamPhotos from './TeamSections/BonusTeamPhotos';
import Spotlight from './TeamSections/Spotlight';

export default function TeamPage() {
    return (
        <div>
            <TeamIntroSection />
            <Spotlight />
            <GuidingPrinciplesSection />
            <CampusVisitSection />
            <BonusTeamPhotos />
        </div>
    )
}