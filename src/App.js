import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header.js";
import Details from "./components/WarehouseComponentsMain/warehouseComponents/Details";
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddNewInventory from "./pages/AddInventoryItem/AddNewInventory";
import Inventory from "./pages/Inventory/Inventory";
import EditInventory from "./pages/EditInventory/EditInventory";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import WareHouseDetail from "./pages/WareHouseDetail/WarehouseDetail";
import EditWarehouse2 from "./pages/EditWarehouse2/EditWarehouse2";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route path="/AddWarehouse" component={AddWarehouse} />
          {/* <Route path="/details/:id" component={Details} /> */}
          <Route path="/details/:id" component={EditWarehouse2} />
          <Route path="/add-new-inventory" component={AddNewInventory} />
          <Route exact path="/inventory" component={Inventory} />
          <Route path="/edit-inventory-item" component={EditInventory} />
          {/* <Route path ='/edit-warehouse' component={EditWarehouse}/> */}
          <Route
            path="/inventory/:inventoryid"
            render={(RouterProps) => {
              return (
                <InventoryDetails
                  routerprops={RouterProps.match.params.inventoryid}
                />
              );
            }}
          />
          <Route path="/inventory" component={Inventory} />
          <Route path="/:id" component={WareHouseDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
