import { NavLink } from "react-router";
import style from "./Navbar.module.scss";

export function Navbar() {
  return (
    <section className={style.Navbar}>
      <NavLink to="/alle jobs">Alle Jobs</NavLink>
      <NavLink to="/Opret">Opret Annonce</NavLink>
      <NavLink to="/Nyheder">Nyheder</NavLink>

      <div className={style.Promt}>
        <NavLink to="/Profil">Opret Profil</NavLink>
        <NavLink to="/Logind">Log Ind</NavLink>
      </div>
    </section>
  );
}
