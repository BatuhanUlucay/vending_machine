import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, showPopup } from "../redux/actions";

function Product({ product }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function handleSelectItemClick() {
    if (state.userBalance < product.price) {
      dispatch(showPopup("Not enough money for selected product."));
    } else if (product.quantity <= 0) {
      dispatch(showPopup(`There is no ${product.name} left.`));
    } else {
      dispatch(selectProduct(product));
    }
  }

  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name + " logo"} width={100} />
      <div>{product.name}</div>
      <div>{product.price} ₺</div>
      <div>{product.quantity} remaining</div>
      <button className="btn-select" onClick={handleSelectItemClick}>
        Select item
      </button>
    </div>
  );
}

export default Product;
