import { NavLink } from "react-router";

export function Mainnavbar() {
  return (
    <section>
      <NavLink to="/alle jobs">Alle Jobs</NavLink>
      <NavLink to="/Opret">Opret Annonce</NavLink>
      <NavLink to="/Nyheder">Nyheder</NavLink>

      <div>
        <NavLink to="/Profil">Opret Profil</NavLink>
        <NavLink to="/Logind">Log Ind</NavLink>
      </div>
    </section>
  );
}
