import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
