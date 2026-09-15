import { Mainfilter } from "../../Component/Filtering/Filtering";
import { Mainfooter } from "../../Component/Footer/Footer";
import { Mainheader } from "../../Component/Header/Header";
import { Mainkategori } from "../../Component/Kategori/Kategori";
import { Loginform } from "../../Component/Loginformular/Loginformular";
import { Mainnavbar } from "../../Component/Navbar/Navbar";
import { Mainnyhedscard } from "../../Component/Nyhedscard/Nyhedscard";
import { Mainsoeg } from "../../Component/Soeg/Soeg";

export function Frontpage() {
  return (
    <>
      <Mainheader />
      <Mainnavbar />
      <Loginform />
      <Mainsoeg />
      <Mainfilter />
      <Mainkategori />
      <Mainnyhedscard />
      <Mainfooter />
    </>
  );
}
