import { useState, useEffect } from 'react';
import { getCategories } from "../services";
import { CategoriesType } from '../TypeDefs';

const useGetCategories = () => {
    const [categories, setCategories] = useState<CategoriesType[]>([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
    
    return {categories};
};
 
export default useGetCategories;