import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../../axios/apiClient";

function BrowseByNameInfo() {
    const { query } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const res = await apiClient.get(`/search.php?s=${query}`);
                console.log(res.data);
                setMeals(res.data.meals );
            } catch (error) {
                console.error( error);
            }
        }
        
        fetchMeals();
    }, [query]);

    return (
        <div>
            <div className="latestMealsContainer">
                <div className="mealsCards">
                    { meals.map((meal) => (
                            <div key={meal.idMeal} className="mealsCard">
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <h3>{meal.strMeal}</h3>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default BrowseByNameInfo;
