import React from "react";
import "./Country.css";
import { Link } from "react-router-dom";
import { flag } from "../../data/flag";



const imageAPI = "https://www.themealdb.com/images/icons/flags/big/64";

function Country() {
  return (
    <div className="CountryContainer">
      <h2>Browse Country</h2>
      <div className="CountryContent">
        {flag.map((item, index) => (
          <div key={index} className="country-item">
            <Link to={`/country/${item.str}`}>
              <img src={`${imageAPI}/${item.title}.png`}  />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Country;
