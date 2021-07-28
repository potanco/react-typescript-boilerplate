import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <p className="diagonal-fractions">1/2</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
