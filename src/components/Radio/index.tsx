import { useField } from "formik";
import React from "react";
import { styles } from "./styles";

interface RadioProps {
  label?: string;
  name: string;
  value: string;
}

const Radio = ({ name, label, value }: RadioProps) => {
  const [field, meta, helpers] = useField({
    name: name,
    type: "radio",
    value: value,
  });
  return (
    <div className={styles.radio}>
      <label className={styles.radioLabel}>
        <input {...field} type="radio" className={styles.radioButton} />
        {label && label}
      </label>
    </div>
  );
};

export default Radio;
