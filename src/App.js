import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import DeleteWarehouse from "./components/Component/DeleteWarehouse";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DeleteWarehouse} />

          <Route
            path="/:warehouseid/inventory"
            render={(RouterProps) => {
              return <DeleteWarehouse match={RouterProps} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

/*

      
      */
