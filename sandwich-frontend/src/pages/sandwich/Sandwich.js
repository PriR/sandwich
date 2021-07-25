import Toppings from "../topping/Toppings";
import BreadSize from "../breadsize/BreadSize";
import BreadType from "../breadtype/BreadType";
import Sauces from "../sauces/Sauces";
import Vegetables from "../vegetables/Vegetables";
import Stock from "../stock/Stock";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStock } from "../../services/ingredientsService";

const Sandwich = (props) => {
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
    <div>
      <div className="sandwich-container">
        <BreadType />
        <BreadSize />
      </div>

      <div className="sandwich-container">
        <Toppings />
        <Vegetables />
        <Sauces />
      </div>
      <div className="sandwich-container">
        <Stock appState={appState} />
      </div>
    </div>
  );
};

export default withRouter(Sandwich);
