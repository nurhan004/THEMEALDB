import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PopularIngredients.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

function PopularIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const res = await axios.get(API_URL);
        setIngredients(res.data.meals.slice(0, 4));
      } catch (err) {
        console.error("Ошибка загрузки:", err);
        setError("Не удалось загрузить ингредиенты. Попробуйте позже.");
      }
    };

    fetchIngredients();
  }, []);

  return (
    <div className="PopularIngredientsContainer">
      <div className="line"></div>
      <h2>Popular Ingredients</h2>
        <div className="PopularIngredientsContainerCards">
          {ingredients.map((ingredient) => (
            <div className="popular-ingredients-card" key={ingredient.idIngredient}>
              <img 
                src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} />
              <p>{ingredient.strIngredient}</p>
            </div>
          ))}
        </div>

      <div className="line"></div>
    </div>
  );
}

export default PopularIngredients;
