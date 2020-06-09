import React, { useState } from "react";
import Search from "./Search";
import Catalog from "./Catalog/Container";

const Grid = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="row">
      <div className="col s12 m12 l12">
        <Search onChange={setSearchText} />
      </div>
      <Catalog searchText={searchText} />
    </div>
  );
};

export default Grid;
