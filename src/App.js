import "./styles/App.scss";
import "./styles/partials/breakpoints.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header";
import Details from "./components/Component/warehouseComponents/Details";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="bigContainer">
            <Header />
            <Details />
          </div>
        </Switch>
      </Router>
    );
  }
}
