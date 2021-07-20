import { useState, useEffect } from "react";
import "./Toppings.css";
import { ingredientsNames } from "../common/constants/ingredients";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function Ingredients() {

  //criar state ingredients
  
  const [checkedState, setCheckedState] = useState(
    // new Array(ingredients.toppings.length).fill(false)
    new Array(3).fill(false)
  );

  const [total, setTotal] = useState(0);

  const [appState, setAppState] = useState({
    loading: false,
    toppings: null,
  });

  // const ListLoading = withListLoading(List);

  useEffect(() => {
    setAppState({ loading: true });
    // const toppings  = getIngredients();
    fetch(`http://localhost:8080/ingredients/` + ingredientsNames.VEGETABLES) // separar endpoint por tipo, toppings, vegs, sauces...
      .then((response) => response.json())
      .then((data) => {
        console.log('This is your data', data)
        setAppState({ loading: false, toppings: data.toppings });
      });
  }, [setAppState]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + ingredients.toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   };
  // }

  // componentDidMount() {
  //   fetch("http://demo1732975.mockable.io/ingredients")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.vegetables
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  // render() {
  //   const { error, isLoaded, items } = this.state;
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <ul>
  //         {items.map(item => (
  //           <li key={item.id}>
  //             {item.name} {item.price} $ available quantity {item.quantity}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  return (
    <div className="App">
      <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {ingredients.toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
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