import { useState } from "react";


export function Filter({ filterFunc }) {

    const [searchBy, setSearchBy] = useState('strCategory');


    const changeHandler = e => {
        filterFunc(e.target.value, searchBy);
    }

    const classes = ' bg-slate-800 text-white p-2 m-2';
    const activeClasses = ' active bg-slate-500 text-yellow-500 p-2 m-2'

    return (
        <div className=" text-center m-4">
            <input type="text" className=" border-b-2 border-b-stone-700 w-[30%]"
                placeholder="Search here ..." onChange={changeHandler} />
            <button className={searchBy == 'strCategory' ? activeClasses : classes} onClick={() => setSearchBy('strCategory')}>
                Seach by category</button>
            <button className={searchBy == 'strCategoryDescription' ? activeClasses : classes} onClick={() => setSearchBy('strCategoryDescription')}>
                Search by decription</button>
        </div>
    )
}




 


