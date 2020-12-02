import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritePage } from "./pages/FavoritePage";
import { AddPage } from "./pages/AddPage";
import { DetailsPage } from "./pages/DetailsPage";
import React, { useState } from "react";
import { I18nProvider } from "./contexts/i18n";
import LocalSelect from "./components/LocalSelect";

const getLocal = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("lang");
};

function App() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <I18nProvider lang={getLocal()}>
        <Router>
          <GlobalStyle />
          <LocalSelect />
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
      </I18nProvider>
    </>
  );
}

export default App;
