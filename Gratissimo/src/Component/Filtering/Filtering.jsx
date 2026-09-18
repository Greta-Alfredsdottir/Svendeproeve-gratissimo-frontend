import style from "./Filtering.module.scss";
export function Mainfilter() {
  // filter: region, kategorier, arbejdstid, periode, hjemmearbejde, nulstil
  return (
    <div className={style.Filterstyle}>
      <h3>Filter:</h3>
      <select value="Region">
        <option>Region</option>
        <option>Nordjylland</option>
        <option>Midtjylland</option>
        <option>Sønderjylland</option>
        <option>Fyn</option>
        <option>Sjælland</option>
        <option>Bornholm</option>
      </select>
      <select value="Kategorier">
        <option>Kategorier</option>
        <option>Undervisning</option>
        <option>Teknologi</option>
        <option>Kultur</option>
        <option>Håndværk</option>
        <option> Industri</option>
        <option>Service</option>
        <option>Kommunikation</option>
        <option>Kontor</option>
        <option>Øvrige</option>
      </select>
      <select value="Arbejdstid">
        <option>Arbejdstid</option>
        <option>Deltid</option>
        <option>Fuldtid</option>
        <option>Flex</option>
      </select>
      <select value="Periode">
        <option>Periode</option>
        <option>Denne uge</option>
        <option>Denne måned</option>
      </select>
      <select value="Hjemmearbejde">
        <option>Hjemmearbejde</option>
        <option>On-site</option>
        <option>Remote</option>
        <option>Hybrid</option>
        <option></option>
      </select>

      <button>Nulstil</button>
    </div>
  );
}
