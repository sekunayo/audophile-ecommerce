import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import {
  calculateGrandTotal,
  calculateTotal,
  decreaseQuantity,
  increaseQuantity,
  removeAllFromCart,
} from "../../../redux/slices/cartSlice";
import { RootState } from "../../../redux/store";
import { styles } from "./styles";

interface CartProps {
  cart: any;
}
const Cart = ({ cart }: CartProps) => {
  const { total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    dispatch(calculateTotal());
    dispatch(calculateGrandTotal());
    navigate("/checkout");
  };

  useEffect(() => {
    dispatch(calculateTotal());
  });

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h5 className={styles.cartHeaderTitle}>{`CART(${cart.length})`}</h5>
        <button
          type="button"
          onClick={() => dispatch(removeAllFromCart())}
          className={styles.cartHeaderRemoveBtn}
        >
          Remove all
        </button>
      </div>
      <ul className={styles.cartProductList}>
        {cart.map((element: any, index: number) => {
          return (
            <li className={styles.cartProductListRow} key={index + 1}>
              <div className={styles.cartProductContainer}>
                <div className={styles.cartProductImage}>
                  <img src={element?.image?.desktop} alt="cart" />
                </div>
                <div>
                  <h6 className={styles.cartProductHeading}>{element?.name}</h6>
                  <p className={styles.cartProductPrice}>${element?.price}</p>
                </div>
              </div>
              <div className={styles.cartProductBtnContainer}>
                <button
                  onClick={() => dispatch(decreaseQuantity(element))}
                  className={styles.cartProductBtnContentActions}
                >
                  -
                </button>
                <p className={styles.cartProductBtnContent}>
                  {element?.quantity}
                </p>
                <button
                  onClick={() => dispatch(increaseQuantity(element))}
                  className={styles.cartProductBtnContentActions}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.cartTotal}>
        <p className={styles.cartTotalContent}>Total</p>
        <p className={styles.cartTotalContentPrice}>$ {total}</p>
      </div>
      <div className={styles.cartButton}>
        <Button
          handleClick={handleProceedToCheckout}
          variant="primary"
          type="button"
          label="Checkout"
        />
      </div>
    </div>
  );
};

export default Cart;
