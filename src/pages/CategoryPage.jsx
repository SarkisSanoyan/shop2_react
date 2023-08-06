import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from '../api';

import { MealList } from "../components/MealList";

export function CategoryPage() {

    const navigate = useNavigate();
    const { name } = useParams();
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        getFilteredCategory(name).then(data => {
            console.log(data.meals);
            setMeals(data.meals);
        });
    }, []);




    return (
        <div className=" container mx-auto">
            <div className="p-10"></div>
            {name}
            <button className=" bg-slate-800 p-2 m-2 text-white" onClick={() => navigate(-1)}>GO BACK</button>
            <MealList meals={meals} />
            <div className="p-4"></div>
        </div>
    )
}
