import { useState } from "react";
import { AddCategory, GifContainer } from "./components";

import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1 className="m-4">Gif App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center">
          {categories.map((category) => (
            <GifContainer key={category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
