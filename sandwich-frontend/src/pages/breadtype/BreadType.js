import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./BreadType.css";
import { ingredientsNames } from "../../commons/constants/ingredients";
import {
  getIngredients,
  removeStock,
  addStock,
} from "../../services/ingredientsService";
import { getFormattedPrice } from "../../commons/utils/validations";
import { usePrevious } from "../utils/utils";

const BreadType = (props) => {
  const [checkedState, setCheckedState] = useState("");
  const [total, setTotal] = useState(0);
  const prevCheckedState = usePrevious(checkedState);
  const [appState, setAppState] = useState({ loading: false, breadtype: null });

  useEffect(() => {
    setAppState({ loading: true });
    async function fetchData() {
      const ingredients = await getIngredients(ingredientsNames.BREAD_TYPE);
      console.log("ing: ", ingredients);
      setAppState({ loading: false, breadtype: ingredients });
    }
    fetchData();
  }, [setAppState]);

  const handleOnChange = ({ value, id, quantity }) => {
    console.log("q: ", quantity);
    const updatePrice = appState.breadtype.filter(
      (item) => item.name === value
    );

    async function updateStock() {
      await removeStock(id, 1)
        .then((ingredients) => {
          setCheckedState(value);
          setTotal(updatePrice[0].price);
          console.log("voltou remove");
          // put back ingredient into stock
          async function add() {
            if (prevCheckedState) {
              console.log("entrou");
              await addStock(prevCheckedState, 1)
                .then((ingredients) => {
                  setCheckedState(value);
                  setTotal(updatePrice[0].price);
                  console.log("voltou add");
                })
                .catch((e) => {
                  console.log("error: ", e);
                });
            }
          }
          add();
        })
        .catch((e) => {
          console.log("error: ", e);
        });
    }

    async function fetchData() {
      const ingredients = await getIngredients(ingredientsNames.BREAD_TYPE);
      console.log("ing: ", ingredients);
      console.log("voltou fetch on change");
      setAppState({ loading: false, breadtype: ingredients });
    }

    async function refreshData() {
      await updateStock();
      await fetchData();
    }
    refreshData();
  };

  return (
    <div className="items">
      <div className="title-ingredient">Bread Type</div>
        {appState.breadtype &&
          appState.breadtype.map(({ id, name, price, quantity }, index) => {
            return (
              <div className="container" key={id}>
                <div className="item-list">
                <div className="item-checkname">
                  {quantity > 0 && (
                    <input
                      type="radio"
                      id={id}
                      name={name}
                      value={name}
                      checked={appState.breadtype[index].name === checkedState}
                      onChange={(e) => handleOnChange(e.target)}
                    />
                  )}
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  <div className="item-price">
                    {getFormattedPrice(price, quantity, false)}
                  </div>
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
};

export default withRouter(BreadType);
