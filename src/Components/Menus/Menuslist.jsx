import React, { useState, useEffect } from 'react';
import './Menus.scss';


function Menuslist() {
    let [categories, setCategories] = useState([]);
    let [FoodCategories, setFoodCategories] = useState([]);
    let [FilteredDishes, setFilteredDishes] = useState([])
    let [active, setActive] = useState("Beef")

    useEffect(() => {
        fetchCategories();
        fetchFoodCategories();
    }, []);

    async function fetchCategories() {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await response.json();
            setCategories(data.categories);
        } catch {
            console.log("Error fetching categories");
        }
    }

    async function fetchFoodCategories() {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c");
            const data = await response.json();
            setFoodCategories(data.meals); // Use 'meals' because API returns meals for search
            console.log(data.meals)
        } catch {
            console.log("Error fetching food categories");
        }
    }


    function ShowfiltreddishHandler(category) {
        setActive(category)
        let FilteredDisheslist = FoodCategories.filter((item) => {
            return (
                item.strCategory === category
            )
        }).map((items) => {
            return (
                <div className='Favorite-Food-list'>

                    <li>
                        <img src={items.strMealThumb} alt="" />
                        <h1>{items.strMeal}</h1>
                    </li>
                </div>

            )
        })
        setFilteredDishes(
            FilteredDisheslist.length <= 0 ? <h1 className='Filterdhead'>No dishes found</h1> : FilteredDisheslist
        );
        
    }




    return (
        <div className='Menuslist'>
            <div className='Menu-title'>
                <h1>Our Special Menu</h1>
                <p>"Explore diverse food categories tailored to every taste—savory mains, refreshing drinks, indulgent desserts, healthy choices, and quick snacks.  <br/> Discover recipes and inspiration to satisfy cravings and create unforgettable meals."</p>
            </div>

            <div className='Menu-list'>
                {categories.map((item) => (

                    <ul key={item.idCategory}>
                        <li className={item.strCategory == active ? "active" : ""} onClick={() => { ShowfiltreddishHandler(item.strCategory) }}>{item.strCategory}</li>
                    </ul>
                ))}
            </div>


            <div className='Filtered-dishes-result'>

                <div className='FavFooditems'>

                    {FilteredDishes}   
                        {/* The filterd dishes are present in the state */}
                </div>
            </div>
        </div>
    );
}

export default Menuslist;
