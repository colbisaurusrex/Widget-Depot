import React, { useCallback } from "react";
import Summary from "./Summary";

// NOTE: leveraging useCallback in this Container avoids unnecessary re-renders on search and selection. Disabling lint for useCallback dependency in this file only.
const Container = ({ name, price, id, onClick }) => {
  const clickHandler = useCallback(() => {
    onClick();
    // eslint-disable-next-line
  }, []);
  return <Summary key={id} name={name} price={price} onClick={clickHandler} />;
};

export default Container;
