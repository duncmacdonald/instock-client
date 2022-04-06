import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header.js";
import Details from "./components/WarehouseComponentsMain/warehouseComponents/Details";
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddNewInventory from "./pages/AddInventoryItem/AddNewInventory";
import Inventory from './pages/Inventory/Inventory'
import EditInventory from "./pages/EditInventory/EditInventory";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route path='/AddWarehouse' component={AddWarehouse} />
          <Route path="/details" component={Details} />
          <Route path="/add-new-inventory" component={AddNewInventory} />
          <Route path='/inventory' component={Inventory} />
          <Route path ='/edit-inventory-item' component={EditInventory}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
