import { BrowserRouter as Router } from "react-router-dom";
import Sandwich from "./pages/sandwich/Sandwich";

function App() {
  return (
    <div className="App">
      <Router>
        <Sandwich />
      </Router>
    </div>
  );
}

export default App;
