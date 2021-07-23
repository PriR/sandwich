import { useState, useEffect } from "react";
import "./BreadSize.css";
import { ingredientsNames } from "../../commons/constants/ingredients";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { getFormattedPrice } from "../../commons/utils/validations";

const BreadSize = props => {

  const [checkedState, setCheckedState] = useState('');

  const [total, setTotal] = useState(0);

  const [appState, setAppState] = useState({
    loading: false,
    breadSize: null,
  });

  useEffect(() => {
    console.log("props: ", props)
    setAppState({ loading: true });
    fetch(`http://localhost:8080/ingredients?types=` + ingredientsNames.BREAD_SIZE)
      .then((response) => response.json())
      .then((data) => {
        // console.log('This is your data', data)
        setAppState({ loading: false, breadSize: data });
      });
  }, [setAppState]);

  const handleOnChange = (value) => {
    const updatePrice = appState.breadSize.filter((item) => item.name === value);
    setCheckedState(value);
    setTotal(updatePrice[0].price);
  };

  return (
    <div className="BreadSize">
      <h3>Select Bread Size</h3>
      <ul className="toppings-list">
        {appState.breadSize && appState.breadSize.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
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

export default withRouter(BreadSize);
