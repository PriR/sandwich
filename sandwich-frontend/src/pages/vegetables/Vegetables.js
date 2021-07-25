import { useState, useEffect } from "react";
import { getFormattedPrice } from "../../commons/utils/validations";
import { withRouter } from "react-router-dom";

const Vegetables = ({vegetables}) => {
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + vegetables[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="items">
      <div className="title-ingredient">Vegetables</div>
      {vegetables &&
        vegetables.map(({ name, price }, index) => {
          return (
            <div key={index}>
              <div className="item-list">
                <div className="item-checkname">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
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
}

export default withRouter(Vegetables);
