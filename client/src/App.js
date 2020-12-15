import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritePage } from "./pages/FavoritePage";
import { AddPage } from "./pages/AddPage";
import { DetailsPage } from "./pages/DetailsPage";
import styled from "styled-components/macro";
import Sidebar from "./components/Sidebar";
import SidebarPage from "./pages/SidebarPage";

const AppWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function App() {
  return (
    <AppWrapper>
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
          <Route path="/details/:id">
            <DetailsPage />
          </Route>
          <Route path="/sidebar">
            <SidebarPage />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
