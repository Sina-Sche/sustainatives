import Header from "../components/Header";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import NavBar from "../components/NavBar";
import SearchResult from "../components/SearchResult";

export const SearchPage = () => {
  return (
    <>
      <Header title={"Browse"} />
      <Input placeholder={"Search for a product..."} />
      <CategoryOverview />
      <h3>Search Results for Notebook</h3>
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <NavBar />
    </>
  );
};
