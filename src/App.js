import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import "./styles/App.scss";
import "./styles/partials/breakpoints.scss";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return <Header />;
  }
}
