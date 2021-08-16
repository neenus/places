import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import PlaceDetails from "./views/PlaceDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Container className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/places/:id" component={PlaceDetails} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
