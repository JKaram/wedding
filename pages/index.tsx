import type { NextPage } from "next";
import Hero from "../components/Hero/Hero";
import Page from "../components/Page/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
    </Page>
  );
};

export default Home;
