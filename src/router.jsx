import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Api from "./components/Api/Api";
import Search from "./pages/Search/Search";
import BrowseByNameInfo from "./components/Sections/BrowseByName/BrowseByNameInfo/BrowseByNameInfo";
import CountryInfo from "./components/Country/CountryInfo/CountryInfo";
import MealInfo from "./components/Country/MealInfo/MealInfo";
import Desert from "./components/Category/Desert/Desert";
import IngredientsMeals from "./components/IngredientsMeals/IngredientsMeals";


export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "api", element: <Api /> },
            { path: "search/:idMeal", element: <Search /> },
            { path: "browse/:query", element: <BrowseByNameInfo /> },
            { path: "country/:country", element: <CountryInfo /> },
            { path: "meal/:mealId", element: <MealInfo /> },
            { path: "category/:category", element: <Desert /> },
            { path: "ingredient/:ingredientName", element: <IngredientsMeals /> }

        ]
    }
]);
