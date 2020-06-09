import React, { memo } from "react";
import { cx, css } from "emotion";
import useCountRenders from "../../hooks/useCountRenders";

const descriptionText = css`
  font-style: italic;
`;
const Description = memo(({ description }) => {
  useCountRenders("Description Component");
  return <p className={cx(["light", descriptionText])}>{description}</p>;
});

export default Description;
