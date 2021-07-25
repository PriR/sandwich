import { useState, useEffect } from "react";
import { getFormattedPrice } from "../../commons/utils/validations";

export default function Stock() {
  const [appState, setAppState] = useState({
    loading: false,
    stock: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch(`http://localhost:8080/ingredients`)
      .then((response) => response.json())
      .then((data) => {
        setAppState({ loading: false, sauces: data });
      });
  }, [setAppState]);

  return (
    <div>
      <h3>Stock</h3>
      <ul className="toppings-list">
        {appState.sauces &&
          appState.sauces.map(({ name, price, quantity }, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div>
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  <div>{quantity}</div>
                  <div>{getFormattedPrice(price)}</div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
