import { useState, useEffect } from "react";
import { getStock } from "../../services/ingredientsService";

export default function Stock() {
  const [appState, setAppState] = useState({
    loading: false,
    stock: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    async function fetchData() {
      const ingredients = await getStock();
      setAppState({ loading: false, stock: ingredients });
    }
    fetchData();
  }, [setAppState]);

  return (
    <div className="items-stock">
      <div className="title-ingredient">Stock</div>
      {appState.stock &&
        appState.stock.map(({ name, quantity }, index) => {
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
