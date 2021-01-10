import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import SearchPageContent from "../components/SearchPageContent";

export const SearchPage = () => {
  return (
    <PageWrapper>
      <Header title={"Search"} />
      <SearchPageContent />
      <NavBar />
    </PageWrapper>
  );
};
