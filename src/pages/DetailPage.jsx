import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { getMealById } from "../api";


export function DetailPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState({});


    useEffect(() => {
        getMealById(id).then(data => {
            console.log(data.meals[0]);
            setMeal(data.meals[0]);
        })
    }, [])



    return (
        <div className=" flex justify-center items-center flex-col">
            <div className="p-10"></div>
            <img src={meal.strMealThumb} alt={meal.strArea} width='30%' />
            <h3>Id: {meal.idMeal}</h3>
            <h3>Area: {meal.strArea}</h3>
            <h3>Catregory: {meal.strCategory}</h3>
            <button className=" bg-slate-800 p-2 m-2 text-white" onClick={() => navigate(-1)}>GO BACK</button>
        </div>
    )
}
