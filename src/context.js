import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url_all = "https://restcountries.eu/rest/v2/all";
const url_name = "https://restcountries.eu/rest/v2/name/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const ascendingList = () => {
    setCountries((countries) => [
      ...countries.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }),
    ]);
  };
  const descendingList = () => {
    setCountries((countries) => [
      ...countries.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? 1 : textA > textB ? -1 : 0;
      }),
    ]);
  };
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      if (searchTerm) {
        const response = await fetch(`${url_name}${searchTerm}`);
        const data = await response.json();
        if (data) {
          const countrieslist = data.map((item) => {
            const {
              name,
              region,
              nativeName,
              population,
              capital,
              flag,
            } = item;
            return {
              name,
              flag,
              region,
              nativeName,
              capital,
              population,
            };
          });
          setCountries(countrieslist);
        } else {
          setCountries([]);
        }
      } else {
        const response = await fetch(`${url_all}`);
        const data = await response.json();
        if (data) {
          const countrieslist = data.map((item) => {
            const {
              name,
              region,
              nativeName,
              population,
              capital,
              flag,
            } = item;
            return {
              name,
              flag,
              region,
              nativeName,
              capital,
              population,
            };
          });
          setCountries(countrieslist);
        } else {
          setCountries([]);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{
        ascendingList,
        descendingList,
        loading,
        countries,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
