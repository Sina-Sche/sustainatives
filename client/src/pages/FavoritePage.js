import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export const FavoritePage = () => {
  return (
    <>
      <Header title={"Favorites"} />
      <h2>My favorite Products</h2>
      <InfoBox />
      <InfoBox />
      <InfoBox />
      <NavBar />
    </>
  );
};
