import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from './components/Header/Header.js'
import Details from './components/DeleteWarehouse/warehouseComponents/Details.js'
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddNewInventory from "./pages/AddInventoryItem/AddNewInventory";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route path="/details" component={Details} />
          <Route path="/addnewinventory" component={AddNewInventory} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}
