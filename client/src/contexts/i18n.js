import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

export const I18nContext = React.createContext(null);
export const I18nProvider = ({ children }) => {
  let lang = "en";
  const [dict, setDict] = useState({});

  useEffect(() => {
    changeDict(lang);
  }, [lang]);

  const changeDict = async (local) => {
    const dict = await import(`./${local}.json`);
    setDict(dict);
  };
  return (
    <I18nContext.Provider value={{ dict, changeDict }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

export const useDict = () => {
  const { dict } = useI18n();
  return dict;
};

export const useChangeDict = () => {
  const { changeDict } = useI18n();
  return changeDict;
};
I18nProvider.propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string,
};
