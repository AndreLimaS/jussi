import React, { createContext, FC, useState } from "react";
import { SeachPokemon } from "./types";

const initialName: SeachPokemon = {
  namePokemon: "",
  setNamePokemon: () => {},
};

export const SearchContext = createContext<SeachPokemon>(initialName);

const SearchProvider: FC = ({ children }) => {
  const [namePokemon, setNamePokemon] = useState("");
  return (
    <SearchContext.Provider value={{ namePokemon, setNamePokemon }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
