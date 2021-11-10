import React, { FC } from "react";
//Next components
import Link from "next/link";
//Types
import { CategoriesType, CategoryType } from "../TypeDefs";
//Custom Hooks
import useGetCategories from "../hooks/useGetCategories";

//TODO: Add type for categories

const Categories: FC<CategoriesType> = () => {
  
    const { categories } = useGetCategories();

  return (
    <div className="bg-gray-800 bg-opacity-25 shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-normal border-b titles-names pb-4">
        Topics
          </h3>
          {categories.map((category: CategoryType) => (
              <Link href={`/category/${category.slug}`} key={category.name} passHref>
                  <a className="block hover:text-purple-400 ease-in-out transition duration-500 pb-3 mb-3">
                      {category.name}
                  </a>
                </Link>
          ))}
    </div>
  );
};

export default Categories;
