import React from "react";
import Creadores from "./components/Creadores";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Ventanas from "./components/ventanas/Ventanas";

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Ventanas />
      <Creadores />
      <Footer />
    </div>
  );
}
