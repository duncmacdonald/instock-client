import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import DeleteWarehouse from "./components/Component/DeleteWarehouse";
import DeleteInventory from "./components/Component/DeleteInventory";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DeleteWarehouse} />

          <Route
            path="/inventory"
            render={(RouterProps) => {
              return <DeleteInventory match={RouterProps} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
