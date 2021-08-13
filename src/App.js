import { Container } from "@material-ui/core";
import "./App.css";
import PlacesList from "./components/PlacesList/PlacesList";

function App() {
  return (
    <Container className="App">
      <PlacesList />
    </Container>
  );
}

export default App;
