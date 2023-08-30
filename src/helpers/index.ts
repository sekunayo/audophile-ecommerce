import * as yup from "yup";

export const checkoutValidationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  emailAddress: yup.string().email("Wrong format").required("Required"),
  phoneNo: yup
    .string()
    .required("Required")
    .matches(/^\d+$/, "Wrong format")
    .min(5, "Wrong format"),
  zipCode: yup.string().required("Required").min(2, "Wrong format"),
  address: yup.string().required("Required"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  paymentMethod: yup.mixed().oneOf(["eMoney", "Cash"]),
  eMoneyPin: yup
    .string()
    .matches(/^\d+$/, "Wrong format")
    .min(9, "Wrong format")
    .max(9, "Wrong format"),
  eMoneyNumber: yup
    .string()
    .matches(/^\d+$/, "Wrong format")
    .min(4, "Wrong format")
    .max(4, "Wrong format"),
});

export const checkoutInitialValues = {
  name: "",
  emailAddress: "",
  phoneNo: "",
  zipCode: "",
  address: "",
  city: "",
  country: "",
  paymentMethod: "Cash",
  eMoneyNumber: "",
  eMoneyPin: "",
};

export const requiredKeys: Record<any, string> = {
  name: "",
  emailAddress: "",
  phoneNo: "",
  zipCode: "",
  address: "",
  city: "",
  country: "",
};

export const checkCheckoutDetails = (object: any) => {
  let keys = Object.keys(requiredKeys);
  let booleanArray = keys.map((element) => {
    if (object[element] !== "") {
      return true;
    } else {
      return false;
    }
  });
  const finalValue = booleanArray.every((element: any) => element === true);
  if (finalValue) {
    return true;
  }
  return false;
};
