import Toppings from './pages/topping/Toppings';
import BreadSize from './pages/breadsize/BreadSize'
import BreadType from './pages/breadtype/BreadType'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
           <div className="App">
            <ul className="App-header">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/breadsize">Bread Size</Link>
                </li>
                <li>
                  <Link to="/toppings">Toppings</Link>
                </li>
              </ul>
              <Switch>
                <Route exact path='/' component={BreadType}></Route>
                <Route exact path='/breadsize' component={BreadSize}></Route>
                <Route exact path='/toppings' component={Toppings}></Route>
                <Route exact path='*' component={BreadType}></Route>
              </Switch>
           </div>
       </Router>
    </div>
  );
}

export default App;
