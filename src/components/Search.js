import React from "react";
import { debounce } from "lodash";
import useCountRenders from "../hooks/useCountRenders";

const Search = ({ onChange }) => {
  const changeHandler = debounce((text) => onChange(text), 250);
  useCountRenders("search");
  return (
    <div className="input-field">
      <i className="material-icons prefix right">search</i>
      <input
        tabIndex="0"
        aria-label="search"
        placeholder="Find the widget of your dreams"
        id="search_bar"
        type="text"
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};

export default Search;
