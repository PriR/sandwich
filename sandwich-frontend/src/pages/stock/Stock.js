export default function Stock({ appState }) {
  return (
    <div className="items-stock">
      <div className="title-ingredient">Stock</div>
      {appState.stock &&
        appState.stock.map(({ name, quantity }, index) => {
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
