import React, { FC, useState, useEffect } from "react";
//Next components
import Link from 'next/link';
//Services
import { getCategories } from '../services'

//TODO: Add type for categories

const Categories: FC<any> = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories));
    }, []);

    return (
        <div>
            Categories
        </div>
    )
}

export default Categories;
