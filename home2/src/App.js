import "./css/App.css";
import Main from "./components/mainPage/Main";
import Team from "./components/boardPage/BoardPage";
import Header from "./components/header/Header";
import Products from "./components/productsPage/ProductsPage";
import Pro from "./components/productsPage/Product";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/Team" component={Team}></Route>
          {/* <Route path="/products" component={Products}></Route> */}
          <Route path="/products" component={Pro}></Route>
          <Route path="/Contact"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
