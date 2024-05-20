import React from 'react';
import TeamIntroSection from './TeamSections/TeamIntroSection';
import CampusVisitSection from './TeamSections/CampusVisitSection';
import GuidingPrinciplesSection from './TeamSections/GuidingPrinciplesSection';
import BonusTeamPhotos from './TeamSections/BonusTeamPhotos';
import Roles from './TeamSections/Roles';

export default function TeamPage() {
    return (
        <div>
            <TeamIntroSection />
            <Roles />
            <GuidingPrinciplesSection />
            <CampusVisitSection />
            <BonusTeamPhotos />
        </div>
    )
}