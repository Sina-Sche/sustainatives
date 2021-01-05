import { useState } from "react";

const useActive = () => {
  const [activeCategories, setActiveCategories] = useState([]);

  const toggleActive = (categoryName) => {
    const isActive = activeCategories.includes(categoryName);
    let newActiveCategories;
    if (isActive) {
      newActiveCategories = activeCategories.filter(
        (existingCategory) => existingCategory !== categoryName
      );
    } else {
      newActiveCategories = [categoryName];
    }

    setActiveCategories(newActiveCategories);
  };
  return { activeCategories, setActiveCategories, toggleActive };
};
export default useActive;
