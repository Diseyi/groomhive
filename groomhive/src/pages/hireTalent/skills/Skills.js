import React from "react";
import ProductModal from "../../../components/productModal/ProductModal";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="product-container">
      <section className="product-section">
        <h2 className="product-section-title  width">
          Hire for the skills you need
        </h2>
        <p className="product-other-info width">
          We help to select the best-fit staff that meets the business, digital
          and tech needs of organisations. Tap into our brilliant, experienced
          and already scrutinised talent pool for your company.
        </p>
        <div className="product-flex">
          <ProductModal
            title="Full Stack Web"
            info="JavaScript, HTML, CSS, Node, React, Angular, Python, Redux, SQL"
            id="id"
            padding="padding"
          />

          <ProductModal
            title="Flutter Development"
            info="Dart, Java, .Net, Kotlin, Swift or JavaScript"
            id="id"
            padding="padding"
          />

          <ProductModal title="Product Design" info="Figma, Adobe XD" id="id" padding="padding" />
        </div>
      </section>
    </div>
  );
};

export default Skills;
