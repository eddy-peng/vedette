import React from 'react';
import HeroSection from './SolutionSections/HeroSection';
import ChallengesSection from './SolutionSections/ChallengesSection';
import FeaturesSection from './SolutionSections/FeaturesSection';
import FAQSection from './SolutionSections/FAQSection';
import FinalCTASection from './SolutionSections/FinalCTASection';

export default function SolutionPage() {
    return ( 
        <div>
            <HeroSection />
            <ChallengesSection />
            <FeaturesSection />
            <FAQSection />
            <FinalCTASection />
        </div>
    )
}