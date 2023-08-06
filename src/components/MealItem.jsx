import { Link } from "react-router-dom"


export function MealItem({
    idMeal,
    strMeal,
    strMealThumb }) {

    return (
        <div className=" shadow p-4 cursor-pointer hover:shadow-xl">
            <img src={strMealThumb} alt={strMeal} />
            <h3>Id: {idMeal}</h3>
            <h3>Meal: {strMeal}</h3>
            <Link to={'/recipe/' + idMeal} className=" bg-slate-800 p-1 m-0 text-white">Details</Link>
        </div>
    )
}
