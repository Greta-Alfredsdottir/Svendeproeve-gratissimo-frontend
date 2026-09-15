import style from "./Header.module.scss";
import logo from "../../assets/logo/logo.png";

export function Header() {
  return (
    <section className={style.Headerstyle}>
      <img className={style.img} src={logo} alt="" />
    </section>
  );
}
