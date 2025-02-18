import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./MealInfo.css";
import { TfiArrowLeft } from "react-icons/tfi";
import { TfiArrowRight } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";



function MealInfo() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        console.log(data); 
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
  function goToArrow(){
    let nextId = Number(mealId) +1
    navigate(`/meal/${nextId}`)
    

  }

  return (
    <div className="MealInfoContainer">
      <h2>{meal.strMeal}</h2>
      <div className="arrow">

      <TfiArrowLeft onClick={goToArrow} />
      <TfiArrowRight onClick={goToArrow} />
      </div>
      <div className="MealInfoContent">
        <div className="all">
          <img src={meal.strMealThumb} width="450" alt={meal.strMeal} />
          <Link to={`/category/${meal.strCategory}`}>
            <button>{meal.strCategory}</button>
          </Link>
        </div>
        <div className="IngredientsContainer">
          {ingredients.map((item, index) => (
            <div className="Ingredient" key={index}>
 <Link to={`/ingredient/${item.name}`}>
  <img 
    src={`https://www.themealdb.com/images/ingredients/${item.name}.png`} 
    alt={item.name}
  />
</Link>

              <p>{item.measure} {item.name}</p>
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
