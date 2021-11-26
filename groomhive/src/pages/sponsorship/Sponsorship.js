import React from 'react';
import Apply from '../../components/apply/Apply';
import Header from '../../components/header/Header';
import Drive from './drive/Drive';
import Event from './event/Event';
import FirstSection from './firstSection/FirstSection';
import SponsorSection from './sponsorSection/SponsorSection';

const Sponsorship = () => {
    return (
        <div>
            <Header />
            <FirstSection />
            <Drive />
            <SponsorSection />
            <Event />
            <Apply />
        </div>
    )
}

export default Sponsorship
