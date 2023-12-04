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
import { FaStar } from "react-icons/fa";

const HomePage = () => {
  const myItems = [
    "Coming Soon",
    <FaStar className="inline-block mb-1" />,
    "Coming Soon",
    <FaStar className="inline-block mb-1" />,
    "Coming Soon",
    <FaStar className="inline-block mb-1" />,
    "Coming Soon",
    <FaStar className="inline-block mb-1" />,
    "Coming Soon",
    <FaStar className="inline-block mb-1" />,
    "Coming Soon",
    <FaStar className="inline-block mb-1" />,
    "Coming Soon",
    <FaStar className="inline-block mb-1" />,
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
