import "./styles/App.scss";
import "./styles/partials/breakpoints.scss";
import "./styles/DeleteWarehouse.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header";
import Details from "./components/Component/warehouseComponents/Details";
import DeleteWarehouse from "./components/Component/warehouseComponents/DeleteWarehouse";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Header />
            <Details />
            <DeleteWarehouse />
          </div>
        </Switch>
      </Router>
    );
  }
}
