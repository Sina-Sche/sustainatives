import { useState } from "react";
import { getProductsByCategory } from "../utils/api";

const useFilter = () => {
  const [filteredResults, setFilteredResults] = useState([]);

  const filterByCategory = (activeCategories, data) => {
    let products;
    console.log(activeCategories);
    if (activeCategories && data) {
      const products = data.filter(
        ((product) => {
          return product.categories.includes(activeCategories.toString());
        }).map((product) => {
          console.log(product);
          return product;
        })
      );
      return products;
    } else {
      const filterAll = async () => {
        const products = await getProductsByCategory(activeCategories);
        return products;
      };
      filterAll();
    }
    setFilteredResults(products);
  };
  return { filteredResults, setFilteredResults, filterByCategory };
};
export default useFilter;
