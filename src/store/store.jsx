// eslint-disable-next-line
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [country, setCountry] = useState(false);
  const [querry, setQuerry] = useState(false);
  const [category, setCategory] = useState('general');
  const [error, setError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        country: country,
        setCountry: setCountry,
        querry: querry,
        setQuerry: setQuerry,
        category: category,
        setCategory: setCategory,
        error: error,
        setError: setError,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
