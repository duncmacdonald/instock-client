import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import Details from "./components/DeleteWarehouse/warehouseComponents/Details";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route path="/details" component={Details} />
          <Route path="/AddWarehouse" component={AddWarehouse} />
          {/* <Header />
            <Details /> */}
          {/* </div> */}
        </Switch>
      </Router>
    );
  }
}
