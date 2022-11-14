import "./css/App.css";
import Main from "./components/mainPage/Main";
// import Board from './components/boardPage/BoardPage';
import Header from "./components/header/Header";
import Pro from "./components/productsPage/Product";
import Team from "./components/teamPage/TeamPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";
function App() {
  async function postUserInfo() {
    let addData = await axios({
      method: "post",
      url: `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`,
      data: {
        // data 는 post,   params은 get방식
      },
    });
  }
  return (
    <div className="background">
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/Board" component={Board}></Route>
            {/* <Route path="/products" component={Products}></Route> */}
            <Route path="/products" component={Pro}></Route>
            <Route path="/Contact" component={Team}></Route>
            <Route path="/oauth" component={LoginPage}></Route>
          </Switch>
        </Router>
      </div>
      <button onClick={postUserInfo}>dddddddddddd</button>
    </div>
  );
}

export default App;
