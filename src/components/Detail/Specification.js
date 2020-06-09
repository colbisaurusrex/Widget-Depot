import React from "react";
import { cx, css } from "emotion";

const specificationContainer = css`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const specificationText = css`
  font-weight: 100;
  font-size: 25px;
  letter-spacing: 1px;
`;
const Specification = ({ text, subText }) => {
  return (
    <div className={specificationContainer}>
      <p className={cx(["center", specificationText])}>{text}</p>
      <p className="center">{subText}</p>
    </div>
  );
};

export default Specification;
