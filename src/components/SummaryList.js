import React from "react";
import { isEmpty } from "lodash";
import Summary from "./Summary/Container";

// NOTE: For a real app, I'd consider virtualization if there was a potential for long lists.
const SummaryList = (props) => {
  const { items = [], onClick } = props;
  if (isEmpty(items)) return <div>No items found</div>;
  return (
    <ul>
      {items.map(({ name, price, id }) => (
        <Summary
          key={id}
          name={name}
          price={price}
          onClick={() => onClick(id)}
        />
      ))}
    </ul>
  );
};

export default SummaryList;
