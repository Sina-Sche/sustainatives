import React from "react";
import { useChangeDict } from "../contexts/i18n";

const LocalSelect = () => {
  const changeDict = useChangeDict();
  return (
    <select onChange={(e) => changeDict(e.target.value)}>
      <option value="de">DE</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LocalSelect;
