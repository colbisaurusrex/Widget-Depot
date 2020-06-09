import React, { memo } from "react";
import { getDimensionText } from "../../utils";
import Specification from "./Specification";

const SpecificationList = memo(({ specifications }) => {
  const { dimensions, weight, capacity } = specifications;
  const dimensionText = getDimensionText(dimensions);
  return (
    <div className="row">
      <div className="col s12 m4 l4">
        <Specification text={dimensionText} subText="Dimensions" />
      </div>
      <div className="col s12 m4 l4">
        <Specification text={`${weight}lbs`} subText="Weight" />
      </div>
      <div className="col s12 m4 l4">
        <Specification text={`${capacity}L`} subText="Capacity" />
      </div>
    </div>
  );
});

export default SpecificationList;
