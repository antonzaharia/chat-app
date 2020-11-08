import { Container, Button } from "atomize";
import { Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
function App() {
  return (
    <Container d="flex" justify="center">
      <Switch>
        <Route path="/" component={Header}></Route>
      </Switch>
    </Container>
  );
}

export default App;
