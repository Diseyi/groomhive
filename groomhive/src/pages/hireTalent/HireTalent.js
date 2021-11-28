import React from "react";
import Apply from "../../components/apply/Apply";
import FAQs from "../../components/faq/FAQs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ClientTestimonial from "./clientTestimonial/ClientTestimonial";
import Skills from "./skills/Skills";
import TalentTop from "./talentTop/TalentTop";
import WhyHire from "./whyHire/WhyHire";
import Work from "./work/Work";

const HireTalent = () => {
  return (
    <div>
      <Header />
      <TalentTop />
      <WhyHire />
      <Skills />
      <Work />
      <ClientTestimonial />
      <Apply apply="We know how stressful it can be hiring and setting up a strong tech team. Let us help you hire the best and brightest vetted software developers." />
    <FAQs />
    <Footer />
    </div>
  );
};

export default HireTalent;
