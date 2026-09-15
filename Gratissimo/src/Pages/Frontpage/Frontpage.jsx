import { Mainfilter } from "../../Component/Filtering/Filtering";
import { Mainfooter } from "../../Component/Footer/Footer";
import { Header } from "../../Component/Header/Header";
import { Mainkategori } from "../../Component/Kategori/Kategori";
import { Loginform } from "../../Component/Loginformular/Loginformular";
import { Navbar } from "../../Component/Navbar/Navbar";
import { Nyhedscard } from "../../Component/Nyhedscard/Nyhedscard";
import { Mainsoeg } from "../../Component/Soeg/Soeg";
import style from "./Frontpage.module.scss";

export function Frontpage() {
  return (
    <section className={style.page}>
      <Header />
      <Navbar />
      <Loginform />
      <Mainsoeg />
      <Mainfilter />
      <Mainkategori />
      <Nyhedscard />
      <Mainfooter />
    </section>
  );
}
