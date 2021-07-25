import Toppings from "../topping/Toppings";
import BreadSize from "../breadsize/BreadSize";
import BreadType from "../breadtype/BreadType";
import Sauces from "../sauces/Sauces";
import Vegetables from "../vegetables/Vegetables";
import Stock from "../stock/Stock";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStock } from "../../services/ingredientsService";
import { ingredientsNames } from "../../commons/constants/ingredients";

const Sandwich = (props) => {

  const [appState, setAppState] = useState({
    loading: false,
    stock: null,
    breadType: null,
    breadSize: null,
    sauces: null,
    vegetables: null,
    toppings: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    async function fetchData() {
      const ingredients = await getStock();
      const breadType = ingredients.filter(i => i.ingredientType === ingredientsNames.BREAD_TYPE);
      const breadSize = ingredients.filter(i => i.ingredientType === ingredientsNames.BREAD_SIZE);
      const sauces = ingredients.filter(i => i.ingredientType === ingredientsNames.SAUCES);
      const vegetables = ingredients.filter(i => i.ingredientType === ingredientsNames.VEGETABLES);
      const toppings = ingredients.filter(i => i.ingredientType === ingredientsNames.TOPPINGS);
      setAppState({ loading: false, stock: ingredients, breadType: breadType, breadSize: breadSize, sauces: sauces, vegetables: vegetables, toppings: toppings });
      console.log("appState: ", appState);
    }
    fetchData();
  }, [setAppState]);

  return (
    <div>
        <div className="sandwich-container">
          <BreadType breadType={appState.breadType} />
          <BreadSize breadSize={appState.breadSize} />
        </div>

        <div className="sandwich-container">
          <Toppings toppings={appState.toppings} />
          <Vegetables vegetables={appState.vegetables} />
          <Sauces sauces={appState.sauces} />
        </div>
        <div className="sandwich-container">
          <Stock stock={appState.stock} />
        </div>
    </div>
  );
};

export default withRouter(Sandwich);
