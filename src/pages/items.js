import React from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../Data/itemData";

const Items = () => {
  return (
    <>
      <h1>Items Page</h1>
      <ul>
        {ITEMS.map((item) => (
          <li key={item.id}> {/* Make sure to add a unique key when rendering a list */}
             <Link to={`/items/${item.id}`}>
                {item.id}
                </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Items;
