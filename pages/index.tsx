import type { NextPage } from "next";
import { useRef } from "react";
import { scrollToRef } from "../utils/utils";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Page from "../components/Page/Page";
import RSVP from "../components/RSVP";

const Home: NextPage = () => {
  const RSVPRef = useRef<HTMLDivElement>(null);

  return (
    <Page>
      <Hero scrollDown={() => scrollToRef(RSVPRef)} />
      <div ref={RSVPRef}>
        <RSVP />
      </div>
      <About />
      <Footer />
    </Page>
  );
};

export default Home;
