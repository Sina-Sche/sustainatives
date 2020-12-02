import Header from "../components/Header";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import NavBar from "../components/NavBar";
import SearchResult from "../components/SearchResult";
import { useDict } from "../contexts/i18n";

export const SearchPage = () => {
  const dict = useDict();

  return (
    <>
      <Header title={dict.searchpage} />
      <Input placeholder={dict.searchplaceholder} />
      <CategoryOverview />
      <h3>{dict.searchresult}</h3>
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <NavBar />
    </>
  );
};
