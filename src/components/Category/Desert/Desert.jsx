import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Desert() {
    const { category } = useParams(); 
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                setMeals(response.data.meals );
            } catch (err) {
                console.log( err);
            }
        }
        fetchMeals();
    }, [category]);
    return (
        <div className='CountryInfoContainer'>
            <h2>Meals tagged with {category}</h2>
            <div className='CountryInfoContent'>
                {
                    meals.map((meal) => (
                        <div key={meal.idMeal} className='CountryCard'>
                            <Link to={`/meal/${meal.idMeal}`}>
                            <img src={meal.strMealThumb}  />
                            </Link>
                            <p>{meal.strMeal}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Desert;
