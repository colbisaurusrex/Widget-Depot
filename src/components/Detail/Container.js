import React from "react";
import Detail from "./Detail";

const Container = ({ item, addToCart }) => {
  if (!item) {
    return <div className="center">Select an item</div>;
  }
  const { name, description, specifications, img } = item;
  return (
    <Detail
      img={img}
      name={name}
      addToCart={addToCart}
      description={description}
      specifications={specifications}
    />
  );
};

export default Container;
