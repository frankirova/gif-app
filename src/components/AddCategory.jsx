import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [value, setValue] = useState("");

  const handleChangeInput = ({ target }) => {
    setValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanValue = value.trim();
    onNewCategory(cleanValue);

    const inputAddCategory = document.getElementById("input-add-category");
    inputAddCategory.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="input-add-category"
        placeholder="Search gif"
        onChange={handleChangeInput}
      />
    </form>
  );
};

