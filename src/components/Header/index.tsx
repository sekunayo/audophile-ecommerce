import React from "react";
import { styles } from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  navigation: Array<{ path: string; text: string }>;
}
const Header = ({ navigation }: HeaderProps) => {
  console.log(navigation);
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          {navigation.map((element: any, index: number) => {
            return (
              <Link
                to={`${element.path}`}
                key={index + 1}
                className={styles.headerNavListItem}
              >
                {element.text}
              </Link>
            );
          })}
        </ul>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;
