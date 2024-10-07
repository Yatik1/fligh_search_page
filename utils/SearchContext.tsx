"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface SearchContextType {
  whereFrom: string;
  setWhereFrom: (value: string) => void;
  whereTo: string;
  setWhereTo: (value: string) => void;
  departure: string;
  setDeparture: (value: string) => void;
  returnDate: string;
  setReturnDate: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [whereFrom, setWhereFrom] = useState<string>("");
  const [whereTo, setWhereTo] = useState<string>("");
  const [departure, setDeparture] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");

  useEffect(() => {
    const savedSearch = localStorage.getItem("search");
    if (savedSearch) {
      const { whereFrom, whereTo, departure, returnDate } = JSON.parse(savedSearch);

      if (whereFrom) setWhereFrom(whereFrom);
      if (whereTo) setWhereTo(whereTo);
      if (departure) setDeparture(departure);
      if (returnDate) setReturnDate(returnDate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "search",
      JSON.stringify({ whereFrom, whereTo, departure, returnDate })
    );
  }, [whereFrom, whereTo, departure, returnDate]);

  return (
    <SearchContext.Provider
      value={{ whereFrom, setWhereFrom, whereTo, setWhereTo, departure, setDeparture, returnDate, setReturnDate }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
