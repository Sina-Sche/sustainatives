import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritePage } from "./pages/FavoritePage";
import { AddPage } from "./pages/AddPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/favorites">
          <FavoritePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
