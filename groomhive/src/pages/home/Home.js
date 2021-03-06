
import React from 'react'
import Apply from '../../components/apply/Apply'
import FAQs from '../../components/faq/FAQs'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import JoinGroomhive from './joinGroomhive/JoinGroomhive'
import ProductSection from './productSection/ProductSection'
import SectionOne from './sectionOne/SectionOne'
import TestimonialSection from './testimonialSection/TestimonialSection'
import Videosection from './videoSection/Videosection'

const Home = () => {

    return (
        <div>
            <Header />
            <SectionOne />
            <TestimonialSection />
            <Videosection />
            <JoinGroomhive />
            <ProductSection />
            <Apply
            apply="Probably the best decision you’ll ever make" />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Home
