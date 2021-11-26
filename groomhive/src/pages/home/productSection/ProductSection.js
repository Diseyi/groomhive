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
          <ProductModal />
          <ProductModal />
          <ProductModal />
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
