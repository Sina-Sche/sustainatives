import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritePage } from "./pages/FavoritePage";
import { AddPage } from "./pages/AddPage";
import { DetailsPage } from "./pages/DetailsPage";
import styled from "styled-components/macro";

const AppWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="/products/:id">
              <DetailsPage />
            </Route>
          </Switch>
        </Router>
      </AppWrapper>
    </QueryClientProvider>
  );
}

export default App;
