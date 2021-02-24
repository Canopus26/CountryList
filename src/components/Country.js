import React from "react";

const Country = ({ capital, region, nativeName, flag, name, population }) => {
  return (
    <article className="country">
      <div className="img-container">
        <img src={flag} alt={name}></img>
      </div>
      <div className="country-footer">
        <h3>Name:{name}</h3>
        <h2>Capital:{capital}</h2>
        <p>NativeName:{nativeName}</p>
        <p>Region:{region}</p>
        <p>Population:{population}</p>
      </div>
    </article>
  );
};

export default Country;
