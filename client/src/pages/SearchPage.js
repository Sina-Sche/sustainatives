import Header from "../components/Header";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import NavBar from "../components/NavBar";
export const SearchPage = () => {
  return (
    <>
      <Header title={"Browse"} />
      <Input />
      <CategoryOverview />
      <h3>Search Results</h3>
      <NavBar />
    </>
  );
};
