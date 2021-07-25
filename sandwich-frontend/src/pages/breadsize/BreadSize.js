import { useState, useEffect } from "react";
import { ingredientsNames } from "../../commons/constants/ingredients";
import { withRouter } from "react-router-dom";
import { getFormattedPrice } from "../../commons/utils/validations";

const BreadSize = (props) => {
  const [checkedState, setCheckedState] = useState("");

  const [total, setTotal] = useState(0);

  const [appState, setAppState] = useState({
    loading: false,
    breadSize: null,
  });

  useEffect(
    (props) => {
      console.log("props: ", props);
      setAppState({ loading: true });
      fetch(
        `http://localhost:8080/ingredients?types=` + ingredientsNames.BREAD_SIZE
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log('This is your data', data)
          setAppState({ loading: false, breadSize: data });
        });
    },
    [setAppState]
  );

  const handleOnChange = (value) => {
    const updatePrice = appState.breadSize.filter(
      (item) => item.name === value
    );
    setCheckedState(value);
    setTotal(updatePrice[0].price);
  };

  return (
    <div className="items">
      <div className="title-ingredient">Bread Size</div>
      {appState.breadSize &&
        appState.breadSize.map(({ name, price, quantity }, index) => {
          return (
            <div className="container" key={index}>
              <div className="item-list">
              <div className="item-checkname">
                <input
                  type="radio"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={appState.breadSize[index].name === checkedState}
                  onChange={(e) => handleOnChange(e.target.value)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="item-price">{getFormattedPrice(price)}</div>
              </div>
            </div>
          );
        })}
      <div>
        <div className="item-list">
          <div className="item-price">Total:</div>
          <div className="item-price">{getFormattedPrice(total)}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BreadSize);
