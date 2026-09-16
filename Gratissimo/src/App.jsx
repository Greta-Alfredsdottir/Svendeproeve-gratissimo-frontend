import { BrowserRouter, Routes, Route } from "react-router";
import { Frontpage } from "./Pages/Frontpage/Frontpage";
import { Allejobs } from "./Pages/Allejobs/Allejobs";
import { MainLayout } from "./Layout/Layout";
import { Nyheder } from "./Pages/Nyheder/Nyheder";
import { Opretannonce } from "./Pages/Opretannonce/Opretannonce";
import { Opretprofil } from "./Pages/Opretprofil/Opretprofil";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/*Husk at lave nedenstående til alle "pages" jeg laver */}
          <Route path="/" index element={<Frontpage />} />
          <Route path="/Allejobs" index element={<Allejobs />} />
          <Route path="/Opretannonce" index element={<Opretannonce />} />
          <Route path="/Nyheder" index element={<Nyheder />} />
          <Route path="/Opretprofil" index element={<Opretprofil />} />
          <Route path="/Login" index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
