import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Service from "./pages/service";
import Apropos from "./pages/apropos";
import PageNotFound from "./pages/404";
import NavBar from "./composant/navBar";
import Contact from "./pages/contact";
import Footer from "./composant/footer";
import Securite from "./composant/securite";
import Entretien from "./composant/entretien";
import Sante from "./composant/sante";

export default function App() {
  const basename = "/employment-agency";
  return (
    <BrowserRouter basename={basename}>
      <NavBar />

      <Routes>
        <Route index element={<Accueil />} />
        <Route path="service" element={<Service />} />
        <Route path="service/securite" element={<Securite />} />
        <Route path="service/entretien-menager" element={<Entretien />} />
        <Route path="service/sante" element={<Sante />} />



        <Route path="apropos" element={<Apropos />} />

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
