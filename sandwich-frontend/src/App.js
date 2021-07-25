import Toppings from "./pages/topping/Toppings";
import BreadSize from "./pages/breadsize/BreadSize";
import BreadType from "./pages/breadtype/BreadType";
import Sauces from "./pages/sauces/Sauces";
import Vegetables from "./pages/vegetables/Vegetables";
import Stock from "./pages/stock/Stock";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sandwich-container">
          <BreadType />
          <BreadSize />
        </div>

        <div className="sandwich-container">
          <Toppings />
          <Vegetables />
          <Sauces />
        </div>
        <div className="sandwich-container">
          <Stock />
        </div>
      </Router>
    </div>
  );
}

export default App;
