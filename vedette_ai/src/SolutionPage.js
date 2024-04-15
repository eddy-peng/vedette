import React from 'react';
import HeroSection from './Sections/HeroSection';
import ChallengesSection from './Sections/ChallengesSection';
import FeaturesSection from './Sections/FeaturesSection';
import FAQSection from './Sections/FAQSection';

export default function SolutionPage() {
    return ( 
        <div>
            <HeroSection />
            <ChallengesSection />
            <FeaturesSection />
            {/* <FAQSection /> */}
        </div>
    )
}