import React from "react";
import "./ProductList.css";
import LatestMeals from "../Sections/LatestMeals/LatestMeals";
import RandomMeals from "../Sections/RandomMeals/RandomMeals";


function ProductList({ data }) {
  if (!data || data.length === 0) return <p>No meals available</p>;

  return (
    <section>
    <div className="latestMealsContainer container">

      <div className="mealsCards">
        {data.slice(0, 8).map((item) =>
        <div>
          <LatestMeals key={item.idMeal} food={item} />         
        </div>
        

        )}
      </div>
    </div>
    </section>
  );
}

export default ProductList;
