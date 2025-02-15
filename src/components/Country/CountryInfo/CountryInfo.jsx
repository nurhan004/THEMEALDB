import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryInfo.css";
import apiClient from "../../../axios/apiClient";

function CountryInfo() {
  const { country } = useParams(); 
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await apiClient.get(`/filter.php?a=${country}`);
        setMeals(response.data.meals || []);
      } catch (error) {
        console.error("Ошибка при загрузке блюд:", error);
      }
    };

    fetchMeals();
  }, [country]);

  return (
    <div className="CountryInfoContainer"> 
      <h2>Meals from the {country} area</h2>
      <div className="CountryInfoContent">
        {meals.map(meal => (
          <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal} className="CountryCard">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p className="link">{meal.strMeal}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountryInfo;
