import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
