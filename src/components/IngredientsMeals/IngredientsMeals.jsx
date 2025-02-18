import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function IngredientsMeals() {
  const [ingredientsMeals, setIngredientsMeals] = useState([]);
  const { ingredientName } = useParams(); 

  useEffect(() => {
    async function fetchIngredientsMeals() {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
        setIngredientsMeals(res.data.meals || []);
      } catch (err) {
        console.log("Ошибка загрузки ингредиентов:", err);
      }
    }

    fetchIngredientsMeals();
  }, [ingredientName]);

  return (
    <div className="MealInfoContainer">
      <div className="MealInfoContent">
        <div className="all">
          <h4>{ingredientName}</h4>
          <img src={`https://www.themealdb.com/images/ingredients/${ingredientName}.png`} width="450" alt={ingredientName} />
        </div>

        <div className="IngredientsContainer">
          {ingredientsMeals.map((meal) => (
            <div className="Ingredient" key={meal.idMeal}>
              <Link to={`/meal/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
                <p>{meal.strMeal}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IngredientsMeals;
