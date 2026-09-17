import style from "./Footer.module.scss";
export function Mainfooter() {
  return (
    <section className={style.Footerstyle}>
      <div>
        <h2>For jobsøgende</h2>
        <p>Din kundeside</p>
        <p>Opret Profil</p>
        <p>Gemte jobs</p>
      </div>
      <div>
        <h2>For arbejdesgivere</h2>
        <p>Virksomhedsprofil</p>
        <p>Opret annonce</p>
        <p>Jobannoncerng</p>
        <p>Rekruttering</p>
      </div>
      <div>
        <h2>Links</h2>
        <p>Om Gratissimo</p>
        <p>Job hos os</p>
        <p>For investorer</p>
        <p>Presse</p>
      </div>
      <div>
        <h2>Vil du have jobs direkte i din indbakke?</h2>
        <p>Tilmeld dig vores elektroniske nyhedsbrev</p>
        <input type="text" />
      </div>
      <div>
        <p>Fidusvej 23</p>
        <p>9230 Øster Lundby</p>
        <p>+45 22 13 22 13</p>
      </div>
    </section>
  );
}
