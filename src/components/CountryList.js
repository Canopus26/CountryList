import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import Country from "./Country";

const CountryList = () => {
  const {
    countries,
    loading,
    ascendingList,
    descendingList,
  } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (countries.length < 1) {
    return (
      <h2 className="section-title">
        no countries matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <button className="btn btn-primary" onClick={() => ascendingList()}>
        a-z sort
      </button>
      <button className="btn btn-primary" onClick={() => descendingList()}>
        z-a sort
      </button>
      <h2 className="section-title">countries</h2>
      <div className="countries-center">
        {countries.map((item, index) => {
          return <Country key={index} {...item}></Country>;
        })}
      </div>
    </section>
  );
};

export default CountryList;
