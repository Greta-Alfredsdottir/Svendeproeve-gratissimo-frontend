import { Mainfilter } from "../../Component/Filtering/Filtering";

import { Mainkategori } from "../../Component/Kategori/Kategori";
import { Logincard } from "../../Component/Logincard/Logincard";

import { Nyhedscard } from "../../Component/Nyhedscard/Nyhedscard";
import { Mainsoeg } from "../../Component/Soeg/Soeg";
import style from "./Frontpage.module.scss";

export function Frontpage() {
  return (
    <section className={style.page}>
      <Logincard />
      <Mainsoeg />
      <Mainfilter />
      <Mainkategori />
      <Nyhedscard />
    </section>
  );
}
