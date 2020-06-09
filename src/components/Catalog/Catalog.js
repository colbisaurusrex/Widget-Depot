import React, { useState } from "react";
import { cx, css } from "emotion";
import SummaryList from "../SummaryList";
import Detail from "../Detail/Container";
import { searchItemsByName, searchItemsById } from "../../utils";

const summaryList = css`
  @media (max-width: 600px) {
    overflow: scroll;
    height: 350px;
    margin-bottom: 10px;
  }
`;

// TODO: Improve time complexity of of search
const Catalog = ({ items, searchText }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const addToCart = (id) => setCart([...cart, { id }]);
  const filteredItems = searchItemsByName(items, searchText);
  const selectedItemDetail = searchItemsById(filteredItems, selectedItem);
  return (
    <div className="row">
      <div className={cx(["col", "s12", "m3", "l3", summaryList])}>
        <SummaryList items={filteredItems} onClick={setSelectedItem} />
      </div>
      <div className="col s12 m9 l9">
        <Detail item={selectedItemDetail} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Catalog;
