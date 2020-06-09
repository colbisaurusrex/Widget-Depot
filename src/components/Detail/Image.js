import React, { memo } from "react";
import { css } from "emotion";
import useCountRenders from "../../hooks/useCountRenders";

const detailImage = css`
  height: auto;
  max-width: 60%;
`;

const Image = memo(({ src, className = detailImage }) => {
  useCountRenders("Image Component");
  return <img className={className} src={src} alt="product" />;
});

export default Image;
