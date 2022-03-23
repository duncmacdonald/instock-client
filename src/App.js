<<<<<<< HEAD
import "./styles/App.scss";
import "./styles/partials/breakpoints.scss";
import "./styles/DeleteWarehouse.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header";
import Details from "./components/Component/warehouseComponents/Details";
import DeleteWarehouse from "./components/Component/warehouseComponents/DeleteWarehouse";
=======
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import Details from "./components/DeleteWarehouse/warehouseComponents/Details";
import Warehouses from "./pages/Warehouses/Warehouses";
>>>>>>> 3a87e8b91be85607bc5afef00f9e301818d26113
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
<<<<<<< HEAD
          <div>
            <Header />
            <Details />
            <DeleteWarehouse />
          </div>
=======
          <Route exact path="/" component={Warehouses} />
          <Route path="/details" component={Details} />
            {/* <Header />
            <Details /> */}
          {/* </div> */}
>>>>>>> 3a87e8b91be85607bc5afef00f9e301818d26113
        </Switch>
      </Router>
    );
  }
}
