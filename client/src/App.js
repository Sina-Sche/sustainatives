import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritePage } from "./pages/FavoritePage";
import { DetailsPage } from "./pages/DetailsPage";
import styled from "styled-components/macro";
import { SplashPage } from "./pages/SplashPage";
import { useEffect, useState } from "react";
import { AboutPage } from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./components/ScrollToTop";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4100);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <Router>
          <ScrollToTop />
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              {loading ? <SplashPage /> : <HomePage />}
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/favorites">
              <FavoritePage />
            </Route>
            <Route path="/products/:id">
              <DetailsPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Router>
      </AppWrapper>
    </QueryClientProvider>
  );
}

export default App;
