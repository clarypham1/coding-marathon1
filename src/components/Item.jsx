function Item({ item, index, deleteItem }) {
  return (
    <li>
      <p>Name: {item.itemName}</p>
      <p>Brand: {item.brand}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: {item.subtotal}</p>
      <p>Tax: {item.tax}</p>
      <p>Availability: {item.availability}</p>

      <button onClick={() => deleteItem(index)}>
        Delete
      </button>
    </li>
  );
}

export default Item;