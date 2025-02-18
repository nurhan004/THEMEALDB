import React from "react";
import "./LatestMeals.css";
import { Link } from "react-router-dom";

function LatestMeals({ food }) {
  if (!food) return null;
  return (
    <div className="meal-card">
      <div className="mealCard">
        <Link to={`/meal/${food.idMeal}`} key={food.idMeal}>
          <img src={food.strMealThumb} alt={food.strMeal} />
        </Link>
        <h3>{food.strMeal}</h3>
      </div>
    </div>
  );
}

export default LatestMeals;
