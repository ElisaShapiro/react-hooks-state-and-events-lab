import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem, isItemInCart] = useState(false)
  const cartState = addItem ? "in-cart" : ""
  function handleClick(event){
    isItemInCart(!addItem)
    }
  
  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addItem ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
