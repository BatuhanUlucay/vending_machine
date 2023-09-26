import React from "react";
import { useDispatch } from "react-redux";
import { selectProduct } from "../redux/actions";

function Product({ product }) {
  const dispatch = useDispatch();
  function handleSelectItemClick() {
    dispatch(selectProduct(product));
  }

  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name + " logo"} width={100} />
      <div>{product.name}</div>
      <div>{product.price} ₺</div>
      <button className="btn-select" onClick={handleSelectItemClick}>
        Select item
      </button>
    </div>
  );
}

export default Product;
