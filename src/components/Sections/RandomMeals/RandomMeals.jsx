import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomMeals.css"

const API3 = "https://www.themealdb.com/api/json/v1/1/random.php";

function RandomMeals() {
  const [randomMeals, setRandomMeals] = useState([]);

  async function fetchRandomMeals() {
    try {
      const mealRequests = Array.from({ length: 8 }, () => axios.get(API3));
      const responses = await Promise.all(mealRequests);
      const meals = responses.map(res => res.data.meals[0]); 
      setRandomMeals(meals);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }

  useEffect(() => {
    fetchRandomMeals();
  }, []); 

  return (
    <div className="RandomMealsContainer">
        <h2>Random Meals</h2>
        <div className="RandomMealsCards">
      {randomMeals.map((random) => (
        <div key={random.idMeal}>
          <img src={random.strMealThumb}  />
          <p>{random.strMeal}</p>
        </div>
      ))}
      </div>
      <div className="line"></div>
    </div>
  );
}

export default RandomMeals;
