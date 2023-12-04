import React from "react";
import ProblemStatement from "./ProblemStatement";
import Timeline from "./Timeline";
import FAQ from "./FAQ";
import Marquee from "./Marquee";
import Header from "./Header";
import Nav from "./Nav";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";

const HomePage = () => {
  const myItems = [
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
    "Coming Soon",
  ];
  return (
    <div>
      <Marquee items={myItems} />
      <Header />
      <Nav />
      <Intro />
      <About />
      <ProblemStatement />
      <Timeline />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
