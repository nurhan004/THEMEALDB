import React from "react";
import "./Country.css";
import { Link } from "react-router-dom";

let flag = [
    {
        title: "kg",
        str: "kyrgyz",
    },
    {
        title: "kz",
        str: "kyrgyz",
    },
    {
        title: "br",
        str: "brazil",
    },
    {
        title: "uz",
        str: "kyrgyz",
    },
    {
        title: "tj",
        str: "kyrgyz",
    },
    {
        title: "gb",
        str: "British",
    },
    {
        title: "us",
        str: "American",
    },
    {
        title: "fr",
        str: "French",
    },
    {
        title: "ca",
        str: "Canadian",
    },
    {
        title: "jm",
        str: "Jamaican",
    },
    {
        title: "cn",
        str: "Chinese",
    },
    {
        title: "nl",
        str: "Dutch",
    },
    {
        title: "eg",
        str: "Egyptian",
    },
    {
        title: "gr",
        str: "Greek",
    },
    {
        title: "nl",
        str: "British",
    },
    {
        title: "in",
        str: "Indian",
    },
    {
        title: "ie",
        str: "Irish",
    },
    {
        title: "it",
        str: "Italian",
    },
    {
        title: "jp",
        str: "Japanese",
    },
    {
        title: "kn",
        str: "Kenyan",
    },
    {
        title: "my",
        str: "Malaysian",
    },
    {
        title: "mx",
        str: "Mexican",
    },
    {
        title: "ma",
        str: "Moroccan",
    },
    {
        title: "hr",
        str: "Croatian",
    },
    {
        title: "no",
        str: "Norwegian",
    },
    {
        title: "pt",
        str: "Portuguese",
    },
    {
        title: "ru",
        str: "Russian",
    },
    {
        title: "ar",
        str: "Argentinian",
    },
    {
        title: "es",
        str: "Spanish",
    },
    {
        title: "sk",
        str: "Slovakian",
    },
    {
        title: "th",
        str: "Thai",
    },
    {
        title: "sa",
        str: "Arabian",
    },
    {
        title: "vn",
        str: "Vietnamese",
    },
    {
        title: "tr",
        str: "Turkish",
    },
    {
        title: "sy",
        str: "Syrian",
    },
    {
        title: "dz",
        str: "Algerian",
    },
    {
        title: "tn",
        str: "Tunisian",
    },
    {
        title: "pl",
        str: "Polish",
    },
    {
        title: "ph",
        str: "Filipino",
    },
    {
        title: "ua",
        str: "Ukrainian",
    },
    {
        title: "uy",
        str: "Uruguayan",
    },
]

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
