import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiClient from "../../../../axios/apiClient";

function BrowseByNameInfo() {
    const { query } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const res = await apiClient.get(`/search.php?s=${query}`);
                if (res.data.meals) {
                    const filteredMeals = res.data.meals.filter(meal =>
                        meal.strMeal.toLowerCase().startsWith(query.toLowerCase())
                    );
                    setMeals(filteredMeals);
                } 
            } catch (error) {
                console.error(error);
            }
        }

        fetchMeals();
    }, [query]);

    return (
        <div>
            <div className="latestMealsContainer">
                <div className="mealsCards">
                    {
                        meals.map((meal) => (
                            <div key={meal.idMeal} className="mealsCard">
                                <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
                                <img src={meal.strMealThumb} />
                                
                                </Link>
                                <h3>{meal.strMeal}</h3>
                            </div>
                        ))
                }
                </div>
            </div>
        </div>
    );
}

export default BrowseByNameInfo;
