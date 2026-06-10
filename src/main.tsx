import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifsApp } from "./GifsApp";
import "./index.css";
// import { MyCounter } from "./counter/components/MyCounter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GifsApp />
    {/* <MyCounter /> */}
  </StrictMode>,
);
