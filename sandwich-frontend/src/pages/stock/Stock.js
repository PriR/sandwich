export default function Stock({ stock }) {
  return (
    <div className="items-stock">
      <div className="title-ingredient">Stock</div>
      {stock &&
        stock.map(({ name, quantity }, index) => {
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
