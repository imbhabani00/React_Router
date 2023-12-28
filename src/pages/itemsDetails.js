import React from "react";
import { useParams } from "react-router-dom";
import { ITEMS } from "../Data/itemData";

const ItemDetail = () => {
  const { id } = useParams();
  // Find the item with the matching ID from the ITEMS array
  const selectedItem = ITEMS.find(item => item.id === id);

  return (
    <>
      <h1>Item Details</h1>
      {selectedItem && (
        <>
          <h3>ID: {selectedItem.id}</h3>
          <h3>Title: {selectedItem.title}</h3>
          <p>Description: {selectedItem.description}</p>
        </>
      )}
    </>
  );
};

export default ItemDetail;
