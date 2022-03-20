// import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
// import Header from "./components/Header";
import Warehouses from "./pages/Warehouses/Warehouses";

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Warehouses} />
        </Switch>
      </Router>
    )
  }
}
