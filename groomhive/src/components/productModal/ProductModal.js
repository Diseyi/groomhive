import React from "react";
import "./ProductModal.css";

const ProductModal = (props) => {
  return (
    <div className="product-modal" id={props.id}>
      <h3 className="product-title w-4/5 ">{props.title}</h3>
      <p className="product-information" id={props.padding}>
        {props.info}
      </p>
    </div>
  );
};

export default ProductModal;
