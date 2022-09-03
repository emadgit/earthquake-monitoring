import React from "react";
import "./App.css";

import { Header } from "./Components/Shared/Header";
import { Footer } from "./Components/Shared/Footer";
import { Home } from "./Components/Home";

function App() {
  return (
    <>
      <Header title={"Earthquake Monitoring"} />
      <Home />
      <Footer copyrightContent={"© 2022 | All rights reserved"} />
    </>
  );
}

export default App;
