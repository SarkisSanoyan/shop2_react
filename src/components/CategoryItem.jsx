import { useNavigate } from "react-router-dom";


export function CategoryItem({
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb }) {

    const classes = 'shadow p-4 flex justify-center items-center flex-col cursor-pointer hover:shadow-xl'; 
    const navigate = useNavigate();

    return (
        <div className={classes} onClick={() => navigate('/category/' + strCategory)}>
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>Id: {idCategory}</h2>
            <h2>Category: {strCategory}</h2>
            <p>
                Description: {strCategoryDescription.length > 100 ?
                    strCategoryDescription.slice(0, 100) + '...' :
                    strCategoryDescription.slice(0, 100)}
            </p>
        </div>
    )
}
