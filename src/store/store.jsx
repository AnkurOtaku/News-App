// eslint-disable-next-line
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [country, setCountry] = useState(false);
  const [querry, setQuerry] = useState(false);
  const [category, setCategory] = useState('general');

  return (
    <AppContext.Provider
      value={{
        country: country,
        setCountry: setCountry,
        querry: querry,
        setQuerry: setQuerry,
        category: category,
        setCategory: setCategory,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
