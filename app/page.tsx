"use client";

import { useEffect, useState } from "react";
import BadTVBackground from "./components/effects/BadTVBackground/BadTVBackground";
import BadTVBackgroundLight from "./components/effects/BadTVBackgroundLight/BadTVBackgroundLight";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Stack from "./components/sections/Stack/Stack";
import Contact from "./components/sections/Contact/Contact";
import Work from "./components/sections/Work/Work";

export default function Home() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const check = () => setLight(document.documentElement.classList.contains("light"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ minHeight: "100vh" }}>
      {light ? <BadTVBackgroundLight /> : <BadTVBackground />}
      <Hero />
      <About />
      <Stack />
      <Work />
      <Contact />
    </main>
  );
}
