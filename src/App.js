<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Header />
          <Route exact path="/" component={WareHouse} />
=======
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.scss";
import "./styles/partials/_breakpoints.scss";
import Header from "./components/Header";
>>>>>>> 5631f807365c13de4acac3b4c2affb59451a463b

export default class App extends Component {
  render() {
    return <Header />;
  }
}
