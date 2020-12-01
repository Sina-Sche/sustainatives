import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritePage } from "./pages/FavoritePage";
import { AddPage } from "./pages/AddPage";
import { DetailsPage } from "./pages/DetailsPage";
import { useState } from "react";

function App() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <HomePage onClick={handleClick} isFavorite={isFavorite} />
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
        <Route path="/details">
          <DetailsPage onClick={handleClick} isFavorite={isFavorite} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
