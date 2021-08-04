export default function IngredientStock ({
  ingredients,
  title
}) {
  return (
    <div>
      <div className="title-ingredient">{title}</div>
      {ingredients &&
        ingredients.map(({ name, quantity }, index) => {
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
