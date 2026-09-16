import style from "./Header.module.scss";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router";

export function Header() {
  return (
    <section className={style.Headerstyle}>
      <NavLink to="/">
        <img className={style.img} src={logo} alt="" />
      </NavLink>
    </section>
  );
}
