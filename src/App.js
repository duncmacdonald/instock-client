import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header";
import Details from "./components/Component/warehouseComponents/Details";
import Footer from "./components/Component/Footer";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Warehouses} />
          <Route path="/details" component={Details} />
          <div className="bigContainer">
            <Details />
          </div>
        </Switch>
            <Footer/>
      </Router>
    );
  }
}
