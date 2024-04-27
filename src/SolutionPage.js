import React from 'react';
import HeroSection from './SolutionSections/HeroSection';
import ChallengesSection from './SolutionSections/ChallengesSection';
import FeaturesSection from './SolutionSections/FeaturesSection';
import DemoVideoSection from './SolutionSections/VideoSection';
import TableSection from './SolutionSections/TableSection';
import FAQSection from './SolutionSections/FAQSection';
import FinalCTASection from './SolutionSections/FinalCTASection';

export default function SolutionPage() {
    return ( 
        <div>
            <HeroSection />
            <ChallengesSection />
            <FeaturesSection />
            <DemoVideoSection />
            <TableSection />
            <FAQSection />
            <FinalCTASection />
        </div>
    )
}