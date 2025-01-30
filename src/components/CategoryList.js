import React, { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "./api";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);
  return (
    <div>
      <h2>Categories</h2>
      {categories.map((cat) => (
        <div key={cat.id}>
          <p>{cat.name}</p>
          <button onClick={() => deleteCategory(cat.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default CategoryList;