import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import SinglePlacePage from "./views/SinglePlace";

function App() {
  return (
    <Router>
      <Switch>
        <Container className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/places/:id" component={SinglePlacePage} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
