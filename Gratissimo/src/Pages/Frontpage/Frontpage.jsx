import { Mainfilter } from "../../Component/Filtering/Filtering";

import { Mainkategori } from "../../Component/Kategori/Kategori";
import { Loginform } from "../../Component/Loginformular/Loginformular";

import { Nyhedscard } from "../../Component/Nyhedscard/Nyhedscard";
import { Mainsoeg } from "../../Component/Soeg/Soeg";
import style from "./Frontpage.module.scss";

export function Frontpage() {
  return (
    <section className={style.page}>
      <Loginform />
      <Mainsoeg />
      <Mainfilter />
      <Mainkategori />
      <Nyhedscard />
    </section>
  );
}
