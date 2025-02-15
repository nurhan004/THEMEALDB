import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MealInfo.css";

function MealInfo() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        setMeal(data.meals[0]);
      } catch (error) {
        console.error("Ошибка при загрузке блюда:", error);
      }
    };

    fetchMeal();
  }, [mealId]);

  if (!meal) return <p>Loading...</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ name: ingredient, measure });
    }
  }

  return (
    <div className="MealInfoContainer">
        <h2>{meal.strMeal}</h2>

      <div className="MealInfoContent">
        <div className="all">
          <img src={meal.strMealThumb} alt={meal.strMeal} width="450" className="MealImage" />
        </div>

        <div className="IngredientsContainer">
          {ingredients.map((item, index) => (
            <div className="Ingredient" key={index}>
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.name}.png`}
                alt={item.name}
                className="IngredientImage"
              />
              <p> {item.measure} {item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="Instructions">
        <h3>Instructions</h3>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default MealInfo;
