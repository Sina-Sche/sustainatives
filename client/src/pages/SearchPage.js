import Header from "../components/Header";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";

export const SearchPage = () => {
  return (
    <>
      <Header title={"Browse"} />
      <Input placeholder={"Search for a product..."} type={"search"} />
      <CategoryOverview />
      <InfoBox />
      <NavBar />
    </>
  );
};
