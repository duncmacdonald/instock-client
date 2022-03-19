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
