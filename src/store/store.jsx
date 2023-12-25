// eslint-disable-next-line
import React, { createContext, useReducer, useState } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {
    // case "ADD_NOTE":
    //   const newNotes = [...state.notes, action.payload];
    //   return { ...state, notes: newNotes };

    // case "DEL_NOTE":
    //   // Use Array.filter to remove the note at the specified index
    //   const indexToDelete = action.payload;
    //   const updatedNotes = state.notes.filter(
    //     (_, index) => index !== indexToDelete
    //   );
    //   return { ...state, notes: updatedNotes };

    // default:
    //   return state;
  }
};

// const initialState = {
  // country: "night",
  // notes: [],
// };

export const AppContext = createContext();

export const AppProvider = (props) => {
  // eslint-disable-next-line
  // const [state, dispatch] = useReducer(AppReducer, initialState);
  const [country, setCountry] = useState(null);

  return (
    <AppContext.Provider
      value={{
        // dispatch,
        // notes: state.notes,
        country: country,
        setCountry: setCountry,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
