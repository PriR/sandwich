import { useState, useEffect } from "react";
import "./Toppings.css";
import { ingredientsNames } from "../../commons/constants/ingredients";
import { getFormattedPrice } from "../../commons/utils/validations";

export default function Toppings() {

  //criar state ingredients

  const [checkedState, setCheckedState] = useState(
    new Array(3).fill(false)
  );

  const [total, setTotal] = useState(0);

  const [appState, setAppState] = useState({
    loading: false,
    toppings: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    // const toppings  = getIngredients();
    fetch(`http://localhost:8080/ingredients?types=` + ingredientsNames.TOPPINGS)
      .then((response) => response.json())
      .then((data) => {
        console.log('This is your data', data)
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
    <div className="Toppings">
      <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {appState.toppings && appState.toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
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
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}