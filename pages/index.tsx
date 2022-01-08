import type { NextPage } from "next";
import Hero from "../components/Hero";
import Page from "../components/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
    </Page>
  );
};

export default Home;
