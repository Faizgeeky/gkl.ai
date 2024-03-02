import React from 'react';
// landing page layout
import LandingLayout from '@/components/layouts/LandingLayout';
// landing page section
import AboutSection from '@/components/landing/AboutSection';
import ComponentSection from '@/components/landing/ComponentSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HeroSection from '@/components/landing/HeroSection';
import PricingSection from '@/components/landing/PricingSection';
import DemoSection from '@/components/landing/DemoSection';
import { Preloader } from '@/components/reactdash-ui';
import CustomForm from '@/components/reactdash-ui/forms/CustomForm';
// import { Input } from '@/components/reactdash-ui/forms/Input'
// import { InputGroup } from '../components/reactdash-ui/forms/InputGroup'
import Landing from './pages/landing';
import Aiassist from './pages/Aiassist';
export default function Index() {
    return (
        <Preloader>
            <LandingLayout>
                {/* <Landing /> */}
                <Aiassist />
                {/* <HeroSection />
                
                <FeaturesSection />
                <CustomForm />
                <AboutSection />
                <DemoSection />
                <ComponentSection />
                <PricingSection /> */}
            </LandingLayout>
        </Preloader>
    );
}