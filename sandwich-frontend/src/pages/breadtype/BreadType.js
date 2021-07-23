import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import "./BreadType.css";
import { ingredientsNames } from "../../commons/constants/ingredients";
import BreadSize from "../breadsize/BreadSize";
import { getIngredients } from "../../services/ingredientsService";
import { getFormattedPrice } from "../../commons/utils/validations";

const BreadType = props => {
  const [checkedState, setCheckedState] = useState("");
  const [total, setTotal] = useState(0);
  const [appState, setAppState] = useState({
    loading: false,
    breadtype: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    async function fetchData() {
      const ingredients = await getIngredients(ingredientsNames.BREAD_TYPE);
      console.log("ing: ", ingredients)
      setAppState({ loading: false, breadtype: ingredients });
    }
    fetchData();
  }, [setAppState]);

  const handleOnChange = (value) => {
    const updatePrice = appState.breadtype.filter(
      (item) => item.name === value
    );
    setCheckedState(value);
    setTotal(updatePrice[0].price);
  };

  return (
    <div className="BreadType">
      <h3>Select Bread Type</h3>
      <ul className="toppings-list">
        {appState.breadtype &&
          appState.breadtype.map(({ name, price, quantity }, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    {quantity > 0 && (
                      <input
                        type="radio"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={
                          appState.breadtype[index].name === checkedState
                        }
                        onChange={(e) => handleOnChange(e.target.value)}
                      />
                    )}
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  <div className="right-section">
                    {getFormattedPrice(price, quantity)}
                  </div>
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

      <ul className="toppings-list">
        {appState.breadtype &&
          appState.breadtype.map(({ name, price, quantity }, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="right-section">{name}</div>
                  <div className="right-section">{price}</div>
                  <div className="right-section">{quantity}</div>
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

      <div>
        <button>
          
        </button>
        {/* <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link
                    to={{
                      pathname: "/breadsize",
                      state: { message: "hello, im a passed message!" },
                    }}
                  >
                    Bread Size
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/breadsize" component={BreadSize}></Route>
            </Switch>
          </div>
        </Router> */}
      </div>
    </div>
  );
}

export default withRouter(BreadType);

