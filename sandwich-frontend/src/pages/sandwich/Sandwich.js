import Toppings from "../topping/Toppings";
import BreadSize from "../breadsize/BreadSize";
import BreadType from "../breadtype/BreadType";
import Sauces from "../sauces/Sauces";
import Vegetables from "../vegetables/Vegetables";
import Stock from "../stock/Stock";
import { withRouter } from "react-router-dom";
import { useState } from "react";

const Sandwich = (props) => {

  const [appState, setAppState] = useState({
    loading: false,
    stock: null,
  });

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
          <Stock />
        </div>
    </div>
  );
};

export default withRouter(Sandwich);
