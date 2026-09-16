import { Header } from "../Component/Header/Header";
import { Navbar } from "../Component/Navbar/Navbar";
import { Mainfooter } from "../Component/Footer/Footer";
import { Outlet } from "react-router";
import style from "./Layout.module.scss";

export function MainLayout() {
  return (
    <div className={style.Layoutcontainer}>
      <Header />
      <Navbar />
      <main className={style.Content}>
        <Outlet />
      </main>
      <Mainfooter />
    </div>
  );
}
