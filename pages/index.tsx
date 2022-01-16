import type { NextPage } from "next";
import Hero from "../components/Hero/Hero";
import Page from "../components/Page/Page";
import RSVP from "../components/RSVP";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
      <RSVP />
    </Page>
  );
};

export default Home;
