import React from "react";

function Product({ name, price, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={name + " logo"} width={100} />
      <div>{name}</div>
      <div>{price} ₺</div>
      <button className="btn-select">Select item</button>
    </div>
  );
}

export default Product;
