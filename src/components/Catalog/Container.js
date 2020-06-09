import React from "react";
import store from "../../store.json";
import Catalog from "./Catalog";

// NOTE: This simulates a connection to a data source. Not totally necessary for this simple of an app.
const Container = ({ searchText }) => {
  return <Catalog items={store.items} searchText={searchText} />;
};

export default Container;
