import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header.js";
import Details from "./components/WarehouseComponentsMain/warehouseComponents/Details";
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddNewInventory from "./pages/AddInventoryItem/AddNewInventory";
import Inventory from './pages/Inventory/Inventory'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route path="/details" component={Details} />
          <Route path="/addnewinventory" component={AddNewInventory} />
          <Route path='/inventory' component={Inventory} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
