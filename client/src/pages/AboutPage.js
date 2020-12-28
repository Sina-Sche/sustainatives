import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import MottoImg from "../assets/images/reduce.jpg";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import useActive from "../hooks/useActive";

export const AboutPage = () => {
  const [visible, setVisible] = useState(false);
  const { activeCategories, toggleActive } = useActive();

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <PageWrapper>
      <Header title={"About"} />
      <h2>What is a SustainAtive?</h2>
      <span>
        Here at SustainAtives, we think that using sustainable alternatives for
        everyday products, is something everyone can do. Next time, you need
        anything, why not quickly check here if there is a sustainable
        alternative for what you are about to buy anyways. You will be surprised
        how many options there are!
      </span>
      <h3>FAQ</h3>
      <h6>What qualifies as a SustainAtive? </h6>
      <img src={MottoImg} alt="Reduce,Reuse" height="150px" />
      <button onClick={handleClick}>▶</button>
      {visible && (
        <span>
          In order for products to be qualified as SustainAtives we run them
          across a set of rules and conditions. Their reusability, impact on
          environment, where and how they are produced along with many other
          facts are being checked in order to guarantee that the products
          offered on this platform truly have a good impact all around. The
          companies offering these products made the protection of the
          environment, along with other great causes their top priority.
        </span>
      )}
      <CategoryList
        activeCategories={activeCategories}
        toggleActive={toggleActive}
      />

      <NavBar />
    </PageWrapper>
  );
};
