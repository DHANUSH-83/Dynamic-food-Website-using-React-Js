import React, { useState, useEffect } from 'react'
import './Pages.scss'

function BlogContent() {

    let [FetchData, setFetchData] = useState([])

    useEffect(() => {
        fetchData()
    }, []);

    async function fetchData() {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await response.json();
            setFetchData(data.categories);
        } catch {
            console.log("Error fetching categories");
        }
    }

    return (
        <div className='BlogContent'>
            <div className='BlogContent-head'>
                <h1>Our Blog & Articles</h1>
                <p>"Discover insights, tips, and stories that inspire and inform. A blog designed to spark curiosity and fuel creativity."</p>
            </div>

            <div className="BlogContent-Datas">
                {
                    FetchData.map((items, index) =>
                        index < 8 ? (
                            <div className='contents' key={index}>
                                <img src={items.strCategoryThumb} alt="" />                                
                                <h3>{items.strCategory}</h3>
                            </div>
                        ) : null
                    )
                }


            </div>
        </div >
    )
}

export default BlogContent