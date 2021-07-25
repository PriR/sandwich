import { useState, useEffect } from "react";
import { ingredientsNames } from "../../commons/constants/ingredients";
import { getFormattedPrice } from "../../commons/utils/validations";

export default function Toppings() {
  //criar state ingredients

  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  const [total, setTotal] = useState(0);

  const [appState, setAppState] = useState({
    loading: false,
    toppings: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    // const toppings  = getIngredients();
    fetch(
      `http://localhost:8080/ingredients?types=` + ingredientsNames.TOPPINGS
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("This is your data", data);
        setAppState({ loading: false, toppings: data });
      });
  }, [setAppState]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + appState.toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="items">
      <div className="title-ingredient">Toppings</div>
        {appState.toppings &&
          appState.toppings.map(({ name, price }, index) => {
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
                    <label htmlFor={`custom-checkbox-${index}`}>
                      {name}
                  </label>
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
}
