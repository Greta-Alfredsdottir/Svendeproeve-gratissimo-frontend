import { NavLink } from "react-router";
import style from "./Navbar.module.scss";

export function Navbar() {
  return (
    <section className={style.Navbar}>
      <NavLink to="/Allejobs">Alle Jobs</NavLink>
      <NavLink to="/Opretannonce">Opret Annonce</NavLink>
      <NavLink to="/Nyheder">Nyheder</NavLink>

      <div className={style.Promt}>
        <NavLink to="/Opretprofil">Opret Profil</NavLink>
        <NavLink to="/Login">Log Ind</NavLink>
      </div>
    </section>
  );
}
