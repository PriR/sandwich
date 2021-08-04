import BreadStock from "../stock/BreadStock";
import IngredientStock from "../stock/IngredientStock";

export default function Order({
  bread,
  toppings,
  sauces,
  vegetables,
}) {
  return (
    <div className="items-stock">
      <div className="title-ingredient">Current Stock</div>
        {/* <div>{bread}</div> */}
    </div>
  );
}
