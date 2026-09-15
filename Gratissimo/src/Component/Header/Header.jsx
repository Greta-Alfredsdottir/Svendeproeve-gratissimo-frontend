import style from "./Header.module.scss";
import logo from "../../assets/logo/logo.png";

export function Mainheader() {
  return (
    <>
      <img className={style.Headerstyle} src={logo} alt="" />
    </>
  );
}
