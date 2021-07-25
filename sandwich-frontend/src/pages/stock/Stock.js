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
    <div className="items-stock">
      <div className="title-ingredient">Stock</div>
      {appState.sauces &&
        appState.sauces.map(({ name, quantity }, index) => {
          return (
            <div key={index}>
              <div className="item-list">
                <div className="item-checkname">
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="item-highlight">{quantity}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
