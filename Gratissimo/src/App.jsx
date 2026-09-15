import { BrowserRouter, Routes, Route } from "react-router";
import { Frontpage } from "./Pages/Frontpage/Frontpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Frontpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
