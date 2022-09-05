import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { EarthquakeDetails } from "../src/Components/Earthquake";
import { Footer } from "./Components/Shared/Footer";
import { Header } from "./Components/Shared/Header";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header title={"Earthquake Monitoring"} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/detail/:earthquakeId" element={<EarthquakeDetails />} />
      </Routes>
    </BrowserRouter>
    <Footer copyrightContent={"© 2022 | All rights reserved"} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
