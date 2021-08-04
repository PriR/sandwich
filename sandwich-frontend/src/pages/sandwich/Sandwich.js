import Toppings from "../topping/Toppings";
import Bread from "../bread/Bread";
import Sauces from "../sauces/Sauces";
import Vegetables from "../vegetables/Vegetables";
import Stock from "../stock/Stock";
import Order from "../order/Order";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getIngredientsStock,
  removeStock,
  addStock,
} from "../../services/ingredientsService";
import {
  getBreadsStock,
  removeBreadStock,
  addBreadStock,
} from "../../services/breadsService";
import { ingredientsNames } from "../../commons/constants/ingredients";
import { usePrevious } from "../utils/utils";

const Sandwich = () => {
  const [checkedBread, setCheckedBread] = useState("");
  const [totalBread, setTotalBread] = useState(0);
  const prevCheckedState = usePrevious(checkedBread);
  const [sandwichState, setSandwichState] = useState({
    bread: null,
    vegetables: null,
    sauces: null,
    toppings: null,
    // bread: { name: null, price: null },
    // vegetables: [{ name: null, price: null }],
    // sauces: [{ name: null, price: null }],
    // toppings: [{ name: null, price: null }],
    grandTotal: null
  });
  const [breadState, setBreadState] = useState({ breads: null });
  const [ingredientsState, setIngredientsState] = useState({ sauces: null, vegetables: null, toppings: null });

  useEffect(() => {
    (async () => {
      const ingredients = await getIngredientsStock();
      const sauces = ingredients.filter((i) => i.ingredientType === ingredientsNames.SAUCES);
      const vegetables = ingredients.filter((i) => i.ingredientType === ingredientsNames.VEGETABLES);
      const toppings = ingredients.filter((i) => i.ingredientType === ingredientsNames.TOPPINGS);
      setIngredientsState({ sauces, vegetables, toppings });
    })();

    (async () => {
      const breads = await getBreadsStock();
      setBreadState({ breads });
    })();
  }, [setIngredientsState, setBreadState]);

  const handleChangeBreads = ({ value, id }) => {
    const selectedBread = breadState.breads.filter((item) => item.id == id);
    setSandwichState({ bread: selectedBread })

    async function removeBread() {
      await removeBreadStock(id, 1)
        .then(() => {
          setCheckedBread(id);
          setTotalBread(selectedBread[0].price);
        }).catch((e) => {
          const data = e.response.data;
          if (data.code == "4001") {
            // out of stock
            // setAppState({ ...appState }); // vai fazer para todos os ingredients, por isso n será true
          }
        });
    }

    async function addBread() {
      if (prevCheckedState) {
        await addBreadStock(prevCheckedState, 1)
          .then(() => {
            setCheckedBread(id);
            setTotalBread(selectedBread[0].price);
          }).catch((e) => console.log("error: ", e));
      }
    }

    async function fetchData() {
      const breads = await getBreadsStock();
      setBreadState({ breads: breads });
    }

    // update quantity and price of ingredients multiplying by bread.standardPrice
    // bug, multiplicando varias vezes pelo standard price... tem q remover a multiplicacao anterior
    async function updateIngredientsPrices() {
      const standardBreadPrice = selectedBread[0].standardPrice;
      const { vegetables, sauces, toppings } = ingredientsState;
      const newToppings = toppings.map(item => {
        item.price = item.price * standardBreadPrice;
        return item;
      });
      const newVegetables = vegetables.map(item => {
        item.price = item.price * standardBreadPrice;
        return item;
      });
      const newSauces = sauces.map(item => {
        item.price = item.price * standardBreadPrice;
        return item;
      });
      console.log("newToppings: ", newToppings);
      setIngredientsState( {...ingredientsState, vegetables: newVegetables, sauces: newSauces, toppings: newToppings})
    }

    async function refreshData() {
      await removeBread();
      await addBread();
      await updateIngredientsPrices();
      await fetchData();
    }
    refreshData();
  };

  return (
    <div>
      <div className="sandwich-container">
        <Bread
          breads={breadState.breads}
          onChangeBread={(e) => handleChangeBreads(e)}
          checkedBread={checkedBread}
          totalBread={totalBread}
        />
      </div>

      <div className="sandwich-container">
        <Toppings toppings={ingredientsState.toppings} />
        <Vegetables vegetables={ingredientsState.vegetables} />
        <Sauces sauces={ingredientsState.sauces} />
      </div>
      <div className="sandwich-container">
        <Stock
          breads={breadState.breads}
          toppings={ingredientsState.toppings}
          sauces={ingredientsState.sauces}
          vegetables={ingredientsState.vegetables}
        />
      </div>
      <div className="sandwich-container">
        <Order
          bread={sandwichState.bread}
          toppings={sandwichState.toppings}
          sauces={sandwichState.sauces}
          vegetables={sandwichState.vegetables}
        />
      </div>
    </div>
  );
};

export default withRouter(Sandwich);
