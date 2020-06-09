import React from "react";
import { css, cx } from "emotion";
import SpecificationList from "./SpecificationList";
import Description from "./Description";
import Image from "./Image";

const cardDetail = css`
  border-radius: 10px;
  height: 850px;
  overflow: hidden;
  @media (max-width: 600px) {
    overflow: scroll;
    height: 550px;
  }
`;

const detailTitle = css`
  display: inline;
  text-transform: uppercase;
  font-weight: bold;
`;

const specificationTitle = css`
  font-size: 20px;
`;

const descriptionContainer = css`
  max-height: 150px;
  overflow-y: scroll;
`;

// NOTE: For a real app, I'd use some kind of roving tab functionality to ensure that the add cart button is always "tabable"
const Detail = ({ name, description, specifications, img, addToCart, id }) => {
  return (
    <div className={cx(["card", cardDetail])}>
      <div className="card-content">
        <div className="card-title">
          <h4 className={detailTitle}>{name}</h4>
          <i
            role="button"
            className="material-icons right"
            tabIndex="0"
            onClick={addToCart}
            onKeyDown={addToCart}
            aria-label="add to cart"
          >
            add_shopping_cart
          </i>
        </div>
        <section className="section center">
          <Image src={img} />
        </section>
        <div className="divider" />
        <section className="section">
          <h5 className={specificationTitle}>Specifications</h5>
          <SpecificationList specifications={specifications} />
        </section>
        <div className="divider" />
        <section className={cx(["section", descriptionContainer])}>
          <Description description={description} />
        </section>
        <div className="divider" />
      </div>
    </div>
  );
};
export default Detail;
