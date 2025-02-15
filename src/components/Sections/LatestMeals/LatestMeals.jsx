import React from "react";
import "./LatestMeals.css";

function LatestMeals({ food }) {
  if (!food) return null; 
  return (
    <div className="meal-card">
      <div className="mealCard">
        <img src={food.strMealThumb} alt={food.strMeal} />
        <h3>{food.strMeal}</h3>
      </div>
    </div>
  );
}

export default LatestMeals;
