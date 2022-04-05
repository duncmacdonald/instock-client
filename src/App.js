import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header.js";
import Details from "./components/WarehouseComponentsMain/warehouseComponents/Details";
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import WareHouseDetail from "./pages/WareHouseDetail/WarehouseDetail";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route exact path="/:id" component={WareHouseDetail} />
          <Route path="/details" component={Details} />
          <Route path="/AddWarehouse" component={AddWarehouse} />
          <Route exact path="/inventory" component={Inventory} />
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
          {/* <Header />
            <Details /> */}
          {/* </div> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}
