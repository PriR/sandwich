import { withRouter } from "react-router-dom";
import { getFormattedPrice } from "../../commons/utils/validations";

const Bread = ({ breads, onChangeBread, checkedBread, totalBread }) => {
  return (
    <div className="items">
      <div className="title-ingredient">Breads</div>
      {breads &&
        breads.map(({ id, breadType, breadSize, price, quantity }, index) => {
          return (
            <div key={id}>
              <div className="item-list">
                <div className="item-checkname">
                  {quantity > 0 && (
                    <input
                      type="radio"
                      id={id}
                      name={id}
                      value={id}
                      checked={breads[index].id == checkedBread}
                      onChange={(e) => onChangeBread(e.target)}
                    />
                  )}
                  <label htmlFor={`custom-checkbox-${index}`}>{breadType} sandwich - {breadSize}</label>
                </div>
                <div className="item-highlight">
                  {getFormattedPrice(price, quantity)}
                </div>
              </div>
            </div>
          );
        })}
      <div>
        <div className="item-list">
          <div className="item-highlight">Total:</div>
          <div className="item-highlight">{getFormattedPrice(totalBread)}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Bread);
