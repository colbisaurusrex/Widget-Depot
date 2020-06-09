import React, { memo } from "react";
import { css, cx } from "emotion";
import useCountRenders from "../../hooks/useCountRenders";

const cardSummary = css`
  border-radius: 10px;
`;

const summaryPriceLabel = css`
  font-weight: 100;
`;

const summaryPriceValue = css`
  font-weight: 200;
  font-size: 30px;
`;

const Summary = memo(({ name, price, onClick }) => {
  useCountRenders(`${name} Summary Component`);
  return (
    <div
      role="button"
      className={cx(["card", cardSummary])}
      tabIndex="0"
      onKeyDown={onClick}
      onClick={onClick}
      aria-label="view item detail"
    >
      <div className="card-content">
        <div className="row valign-wrapper">
          <div className="col s10">
            <h5>{name}</h5>
            <div>
              <p className={summaryPriceLabel}>Price</p>
              <p className={summaryPriceValue}>${price}</p>
            </div>
          </div>
          <div className="col s2 ">
            <i className="small material-icons ">chevron_right</i>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Summary;
