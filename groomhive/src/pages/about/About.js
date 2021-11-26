import React from 'react';
import Header from '../../components/header/Header';
import AboutMore from './aboutMore/AboutMore';
import ApplySection from './applySection/ApplySection';
import Teams from './teams/Teams';
import TopSection from './topSection/TopSection';

const About = () => {
    return (
        <div>
            <Header />
            <TopSection />
            <AboutMore />
            <Teams />
            <ApplySection />
        </div>
    )
}

export default About
