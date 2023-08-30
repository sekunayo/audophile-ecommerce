import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useClickAway } from "react-use";
import { closeModal } from "../../redux/slices/modalSlice";
import { styles } from "./styles";

interface ModalProps {
  children: JSX.Element;
}
const Modal = ({ children }: ModalProps) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  useClickAway(ref, () => {
    dispatch(closeModal());
  });
  return (
    <div className={styles.modal}>
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Modal;
