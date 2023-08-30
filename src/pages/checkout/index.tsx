import { Form, Formik, useFormikContext } from "formik";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import { navigation } from "../../config";
import { styles } from "./styles";
import SummaryCard from "./SummaryCard";
import { ReactComponent as CashIcon } from "../../assets/icons/cash.svg";
import { checkoutInitialValues, checkoutValidationSchema } from "../../helpers";

const Checkout = () => {
  return (
    <>
      <div className={styles.checkoutHeader}>
        <div className={styles.checkoutHeaderContainer}>
          <Header navigation={navigation} />
        </div>
      </div>
      <div className={styles.checkoutBody}>
        <Formik
          initialValues={checkoutInitialValues}
          validationSchema={checkoutValidationSchema}
          onSubmit={(values, action) => {
            action.resetForm();
          }}
        >
          {(props) => (
            <div className={styles.checkoutBodyContainer}>
              <div className={styles.checkoutForm}>
                <h3 className={styles.checkoutFormHeading}>CHECKOUT</h3>
                <Form>
                  {}
                  <div className={styles.checkoutFormRow}>
                    <h4 className={styles.checkoutFormRowHeader}>
                      Billing Details
                    </h4>
                    <div className={styles.checkoutFormRowGrid}>
                      <Input
                        type="text"
                        placeholder="Alexei Ward"
                        label="Name"
                        name="name"
                      />
                      <Input
                        placeholder="alexei@mail.com"
                        type="email"
                        label="Email Address"
                        name="emailAddress"
                      />
                      <Input
                        placeholder="0112025550136"
                        type="tel"
                        label="Phone Number"
                        name="phoneNo"
                      />
                    </div>
                  </div>
                  <div className={styles.checkoutFormRow}>
                    <h4 className={styles.checkoutFormRowHeader}>
                      Shipping Info
                    </h4>
                    <Input
                      type="text"
                      placeholder="1137 Williams Avenue"
                      label="Address"
                      name="address"
                    />
                    <div className={styles.checkoutFormRowGrid}>
                      <Input
                        placeholder="10001"
                        type="text"
                        label="ZIP Code"
                        name="zipCode"
                      />
                      <Input
                        placeholder="New York"
                        type="text"
                        label="City"
                        name="city"
                      />
                      <Input
                        placeholder="United States"
                        type="text"
                        label="Country"
                        name="country"
                      />
                    </div>
                  </div>
                  {/* <div className={styles.checkoutFormRow}>
                    <h4 className={styles.checkoutFormRowHeader}>
                      Payment Details
                    </h4>
                    <div className={styles.checkoutFormInput}>
                      <label className={styles.checkoutInputLabel}>
                        Payment Method
                      </label>
                      <div className={styles.checkoutFormRadioControl}>
                        <Radio
                          value="e-Money"
                          name="paymentMethod"
                          label="e-Money"
                        />
                        <Radio
                          value="Cash"
                          name="paymentMethod"
                          label="Cash on Delivery"
                        />
                      </div>
                    </div>
                    {props?.values?.paymentMethod === "e-Money" && (
                      <div className={styles.checkoutFormRowGrid}>
                        <Input
                          placeholder="238521993"
                          type="text"
                          label="e-Money Number"
                          name="eMoneyNumber"
                        />
                        <Input
                          placeholder="6891"
                          type="text"
                          label="e-Money PIN"
                          name="eMoneyPin"
                        />
                      </div>
                    )}
                    {props?.values?.paymentMethod === "Cash" && (
                      <div className={styles.checkoutFormCash}>
                        <CashIcon />
                        <p>
                          The ‘Cash on Delivery’ option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>*/}
                </Form>
              </div>
              <SummaryCard />
            </div>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
