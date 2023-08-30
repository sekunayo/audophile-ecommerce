import React from "react";
import { styles } from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { openModal } from "../../redux/slices/modalSlice";

interface HeaderProps {
  navigation: Array<{ path: string; text: string }>;
}
const Header = ({ navigation }: HeaderProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <header className={styles.header}>
      <button onClick={() => navigate("/")} type="button">
        <Logo />
      </button>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          {navigation.map((element: any, index: number) => {
            return (
              <NavLink
                to={`${element.path}`}
                key={index + 1}
                className={styles.headerNavListItem}
              >
                {element.text}
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <button
        type="button"
        onClick={() => dispatch(openModal())}
        className={styles.headerCart}
      >
        <Cart />
        <div className={styles.headerCartCircle}>{cart.length}</div>
      </button>
    </header>
  );
};

export default Header;
