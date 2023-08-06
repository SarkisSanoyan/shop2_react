import { useState, useEffect } from "react";
import { getAllCategories } from '../api';

import { Filter } from "../components/Filter";
import { CategoryList } from "../components/CategoryList";

export function HomePage() {

    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            console.log(data.categories);
            setCategories(data.categories);
        });
    }, []);


    const filterFunc = (text, searchBy) => {
        let newCategories = categories.filter(cat => cat[searchBy].toLowerCase().includes(text.toLowerCase()));
        setFilteredCategories(newCategories);
    }



    return (
        <div className=" container mx-auto">
            <div className="p-10"></div>
            <Filter filterFunc={filterFunc} />
            <CategoryList categories={filteredCategories.length > 0 ? filteredCategories : categories} />
            <div className="p-4"></div>
        </div>
    )
}
 