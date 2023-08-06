import { CategoryItem } from "./CategoryItem"


export function CategoryList({ categories }) {

    return (
        <div className=" grid gap-8 m-2 sm:grid-cols-2 md:grid-cols-4">
            {
                categories.map(el => <CategoryItem key={el.idCategory} {...el} />)
            }
        </div>
    )
}
