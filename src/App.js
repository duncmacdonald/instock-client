import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from './components/Header/Header.js'
import Details from './components/DeleteWarehouse/warehouseComponents/Details.js'
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
<<<<<<< HEAD
import AddNewInventory from "./components/AddInventoryItem/AddNewInventory";
=======
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import Inventory from "./pages/Inventory/Inventory";
>>>>>>> 32a766eee61e1f24b6e6d80f35c44511e1682702
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route path="/details" component={Details} />
<<<<<<< HEAD
          <Route path="/addnewinventory" component={AddNewInventory} />
         
=======
          <Route path="/AddWarehouse" component={AddWarehouse} />
          <Route path="/inventory" component={Inventory} />
          {/* <Header />
            <Details /> */}
          {/* </div> */}
>>>>>>> 32a766eee61e1f24b6e6d80f35c44511e1682702
        </Switch>
        <Footer/>
      </Router>
    );
  }
}
