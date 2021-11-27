import React from 'react'
import Apply from '../../components/apply/Apply'
import Header from '../../components/header/Header'
import CodeWar from './codewar/CodeWar'
import Hivegallery from './hiveGallery/Hivegallery'
import HiveStory from './hiveStory/HiveStory'
import HiveGridTop from './hiveTopSection/HiveGridTop'
import SponsorWoman from './sponsorAwoman/SponsorWoman'

const HiveWoman = () => {
    return (
        <div>
            <Header />
            <HiveGridTop />
            <HiveStory />
            <CodeWar />
            <Hivegallery />
            <SponsorWoman />
            <Apply />
        </div>
    )
}

export default HiveWoman
