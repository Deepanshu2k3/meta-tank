import { useEffect, useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Nft from "./components/Nft";
import Roadmap from "./components/Roadmap";
import Docs from "./components/Docs";
import Gameplay from "./components/Gameplay";
import Loader from "./components/Loader";
import { useScreenFixedProvider } from "./components/ScreenFix";
import Lore from "./components/Lore";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Partners from "./components/Partners";

function App() {
  const { showOverlay } = useScreenFixedProvider();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("fix-screen-height", showOverlay);
  }, [showOverlay]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div className="scroll-snap-body">
        <div className={`${showOverlay ? "" : ""}`}> </div> <Hero />
        <Docs />
        <Gameplay />
        <Lore />
        <Nft />
        <Roadmap />
        <Team />
        <Partners />
        <Footer />
      </div>{" "}
    </>
  );
}

export default App;
