import React from "react";
import CountryList from "./CountryList";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CountryList />
    </main>
  );
};

export default Home;
