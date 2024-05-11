import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import BgVideo from "./assets/earth-bg.mp4";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Satelite from './components/Satelite';
import Rapidscat from './components/Rapidscat';
import HeroCard from './components/HeroCard';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Rapidscat />
      <Satelite />
      <Footer/>
    </div>
  );
};

export default App;
