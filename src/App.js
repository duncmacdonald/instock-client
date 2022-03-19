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
import logo from "./logo.svg";
import "./styles/App.scss";
import "./styles/partials/_breakpoints.scss";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
>>>>>>> 3b85e06f6436576006dd70a03db31bd46b9138f4

          <Route
            path="/:warehouseid/inventory"
            render={(RouterProps) => {
              return <Inventory match={RouterProps} />;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
