import React, { useState } from "react";
import Item from "./Item";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [tax, setTax] = useState("");
  const [availability, setAvailability] = useState("In stock");

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  function handleBrandChange(event) {
    setBrand(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  } 
  function handleSubtotalChange(event) {
    setSubtotal(event.target.value);
  }

  function handleTaxChange(event) {
    setTax(event.target.value);
  }
  function handleAvailabilityChange(event) {
    setAvailability(event.target.value);
  }
  // add new items
  function addItem() {
    if (itemName.trim() !== "" && quantity.trim() !== "") {
      setItems((i) => [...i,
        {
          itemName,
          brand,
          quantity,
          subtotal,
          tax,
          availability,
        },
      ]);

      setItemName("");
      setBrand("");
      setQuantity("");
      setSubtotal("");
      setTax("");
      setAvailability("In stock");
    }
  }

  // Delete items
  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      <div>
        <input
          type="text"
          placeholder="Enter item name..."
          value={itemName}
          onChange={handleItemNameChange}
        />

        <input
          type="text"
          placeholder="Enter brand..."
          value={brand}
          onChange={handleBrandChange}
        />

        <input
          type="number"
          placeholder="Enter quantity..."
          value={quantity}
          onChange={handleQuantityChange}
        />

        <input
          type="number"
          placeholder="Enter subtotal..."
          value={subtotal}
          onChange={handleSubtotalChange}
        />

        <input
          type="number"
          placeholder="Enter tax..."
          value={tax}
          onChange={handleTaxChange}
        />

        <select
          value={availability}
          onChange={handleAvailabilityChange}
        >
          <option value="In stock">In stock</option>
          <option value="Out of stock">Out of stock</option>
        </select>

        <button onClick={addItem}>Add Item</button>
      </div>

        <ol>
            {items.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                    index={index}
                    deleteItem={deleteItem}
                 />
    ))}
    </ol>

    </div>
  );
}

export default ShoppingCart;