import BreadStock from "./BreadStock";
import IngredientStock from "./IngredientStock";

export default function Stock({
  breads,
  toppings,
  sauces,
  vegetables,
}) {
  return (
    <div className="items-stock">
      <div className="title-ingredient">Current Stock</div>
      <BreadStock breads={breads} title="Breads" />
      <IngredientStock ingredients={toppings} title="Toppings" />
      <IngredientStock ingredients={sauces} title="Sauces" />
      <IngredientStock ingredients={vegetables} title="Vegetables" />
    </div>
  );
}
