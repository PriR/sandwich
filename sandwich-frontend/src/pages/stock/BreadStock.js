export default function BreadStock ({
  breads,
  title
}) {
  return (
    <div>
      <div className="title-ingredient">{title}</div>
      {breads &&
        breads.map(({ breadType, breadSize, quantity }, index) => {
          return (
            <div key={index}>
              <div className="item-list">
                <div className="item-checkname">
                  <label htmlFor={`custom-checkbox-${index}`}>{breadType} - {breadSize}</label>
                </div>
                <div className="item-highlight">{quantity}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
