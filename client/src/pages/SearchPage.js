import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { CategoryList } from "../components/CategoryList";
import { NavBar } from "../components/NavBar";
export const SearchPage = () => {
  return (
    <>
      <Header title={"Browse"} />
      <Input />
      <CategoryList />
      <h3>Search Results</h3>
      <NavBar />
    </>
  );
};
