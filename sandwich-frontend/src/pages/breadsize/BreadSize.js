import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getFormattedPrice } from "../../commons/utils/validations";

const BreadSize = ({breadSize}) => {
  const [checkedState, setCheckedState] = useState("");
  const [total, setTotal] = useState(0);

  const handleOnChange = (value) => {
    const updatePrice = breadSize.filter(
      (item) => item.name === value
    );
    setCheckedState(value);
    setTotal(updatePrice[0].price);
  };

  return (
    <div className="items">
      <div className="title-ingredient">Bread Size</div>
      {breadSize &&
        breadSize.map(({ name, price, quantity }, index) => {
          return (
            <div key={index}>
              <div className="item-list">
                <div className="item-checkname">
                  <input
                    type="radio"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={breadSize[index].name === checkedState}
                    onChange={(e) => handleOnChange(e.target.value)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="item-highlight">{getFormattedPrice(price)}</div>
              </div>
            </div>
          );
        })}
      <div>
        <div className="item-list">
          <div className="item-highlight">Total:</div>
          <div className="item-highlight">{getFormattedPrice(total)}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BreadSize);
