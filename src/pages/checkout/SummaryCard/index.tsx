import { cx } from "@emotion/css";
import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import { PaystackConsumer, usePaystackPayment } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/Button";
import { checkCheckoutDetails } from "../../../helpers";
import {
  calculateGrandTotal,
  calculateTotal,
} from "../../../redux/slices/cartSlice";
import { RootState } from "../../../redux/store";
import { styles } from "./styles";

const SummaryCard = () => {
  const {
    value: cart,
    total,
    shipping,
    vat,
    grandTotal,
  } = useSelector((state: RootState) => state.cart);
  const { values, submitForm } = useFormikContext<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
    dispatch(calculateGrandTotal());
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: values?.emailAddress,
    amount: grandTotal * 100,
    publicKey: "pk_test_0492a8c4affc9350baba48ad7fa3f866e6dd6932",
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className={styles.summaryCard}>
      <h4 className={styles.summaryCardTitle}>SUMMARY</h4>
      <ul className={styles.summaryCardProductList}>
        {cart.map((element, index) => {
          return (
            <li key={index + 1} className={styles.summaryCardProduct}>
              <div className={styles.summaryCardProductContainer}>
                <div className={styles.summaryCardProductImage}>
                  <img src={element?.image?.desktop} alt="summary" />
                </div>
                <div className={styles.summaryCardProductText}>
                  <h5 className={styles.summaryCardProductTitle}>
                    {element?.name}
                  </h5>
                  <p className={styles.summaryCardProductPrice}>
                    ${element?.price}
                  </p>
                </div>
              </div>
              <p className={styles.summaryCardProductQuantity}>
                x{element?.quantity}
              </p>
            </li>
          );
        })}
      </ul>

      <div className={styles.summaryCardFooter}>
        <p className={styles.summaryCardFooterRow}>
          <span className={styles.summaryCardFooterTitle}>total</span>
          <span className={styles.summaryCardFooterTitleContent}>${total}</span>
        </p>
        <p className={styles.summaryCardFooterRow}>
          <span className={styles.summaryCardFooterTitle}>shipping</span>
          <span className={styles.summaryCardFooterTitleContent}>
            ${shipping}
          </span>
        </p>
        <p className={styles.summaryCardFooterRow}>
          <span className={styles.summaryCardFooterTitle}>vat</span>
          <span className={styles.summaryCardFooterTitleContent}>${vat}</span>
        </p>
        <p className={cx(styles.summaryCardFooterRow, styles.marginTop)}>
          <span className={styles.summaryCardFooterTitle}>grand total</span>
          <span
            className={cx(
              styles.summaryCardFooterTitleContent,
              styles.primaryColor
            )}
          >
            ${grandTotal}
          </span>
        </p>
      </div>
      <div className={styles.summaryCardButton}>
        <Button
          type="submit"
          handleClick={() => {
            if (checkCheckoutDetails(values)) {
              initializePayment();
              submitForm();
            }
            submitForm();
          }}
          label="Continue & Pay"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default SummaryCard;
