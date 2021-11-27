import React from "react";
import ProductModal from "../../../components/productModal/ProductModal";
import './ProductSection.css'

const ProductSection = () => {
  return (
    <div className="product-container">
      <section className="product-section">
        <h2 className="product-section-title  width">
          Explore our hands-on curriculum
        </h2>
        <p className="product-other-info width" >
          {" "}
          Our collaborative coursework simulates the type of environment that
          will transform you into a top tier talent. Attend daily classes with
          your cohort, complete weekly tasks with a team of students, build and
          ship real products.{" "}
        </p>
        <div className="product-flex">
          <ProductModal
          title="Software Development"
          info="Learn development tools, frameworks and methodologies, programming languages (HTML, CSS and Javascript), and software architecture and testing."
          padding="addPadding"
          />
           <ProductModal
          title="Mobile App Development"
          info="In this track, you will learn how to make mobile apps for iOS and Android. Emphasis is placed on the processes, tools and frameworks required to develop functional mobile apps."
          padding="addPadding"
          />
           <ProductModal
          title="Product Design"
          info="Emphasis is placed on Product validation, UI/UX practices, Design thinking, Design Sprint and the process for setting and tracking actionable metrics."
          padding="addPadding"
          />
          
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
