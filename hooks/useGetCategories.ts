import { useState, useEffect } from 'react';
import { getCategories } from "../services";
import { CategoryType } from '../TypeDefs/Categories';

const useGetCategories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
    
    return {categories};
};
 
export default useGetCategories;