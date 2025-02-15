import React from 'react'
import "./Api.css"

function Api() {
  return (
    <div className='ApiContainer'>
        <div className='ApiContent'>
            <div className='free'>
                <h4>👍Free Recipe API Support</h4>
                <p>The API and site will always remain free at point of access.</p>
            </div>
                <h4>Test API Keys</h4>
            <div className='test'>
                <p>You can use the test API key "1" during development of your app or for educational use (see test links below).
                However you must become a supporter if releasing publicly on an appstore.</p>
            </div>
                <h4>⬆️ API Production Key Upgrade</h4>
            <div className='Api'>
                <div>

                <p>All supporters have access to the beta version of the API which allows mutiple ingredient filters.
                You also get access to adding your own meals and images. You can also list the full database rather than limited to 100 items.</p>
                <p> Please up <span>sign on</span>  Paypal and we will email you the upgrade.</p>
                </div>
            </div>
            <div className='Contact'>
                <h4>Contact</h4>
                <p>Email: thedatadb@gmail.com</p>
            </div>
            <div className='V1'>
                <h1>V1 API</h1>
                <p> 📃API Methods using the developer test key '1' in the URL</p>
            </div>
            <div className=''>
                <p className='Search'>Search meal by name</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</p>
            </div>
            <div className='mt'>
                <p className='Search'>List all meals by first letter</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/search.php?f=a</p>
            </div>
            <div className='mt'>
                <p className='Search'>Lookup full meal details by id</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/lookup.php?i=52772</p>
            </div>
            <div className='mt'>
                <p className='Search'>Lookup a single random meal</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/random.php</p>
            </div>
            <div className='mt'>
                <p className='Search'>Lookup a selection of 10 random meals *Premium API Only</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/randomselection.php</p>
            </div>
            <div className='mt'>
                <p className='Search'>List all meal categories</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/categories.php</p>
            </div>
            <div className='mt'>
                <p className='Search'>Latest Meals *Premium API Only</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/latest.php</p>
            </div>
            <div className='mt'>
                <p className='Search'>List all Categories, Area, Ingredients</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/list.php?c=list</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/list.php?a=list</p>
                <p className='apilink'>www.themealdb.com/api/json/v1/1/list.php?i=list</p>
                <div className='mt'>
                    <p className='Search'>Filter by main ingredient</p>
                    <p className='apilink'>www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast</p>
                </div>
                <div className='mt'>
                    <h4>Images</h4>
                    <p className='Search'>Meal Thumbnail Images</p>
                    <p className='Search'>Add /preview to the end of the meal image URL</p>
                    <p className='apilink'>/images/media/meals/llcbn01574260722.jpg/preview</p>
                </div>
                <div className='mt'>
                    <p className='Search'>Ingredient Thumbnail Images</p>
                    <p className='apilink'>www.themealdb.com/images/ingredients/Lime.png</p>
                    <p className='apilink'>www.themealdb.com/images/ingredients/Lime-Small.png</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Api