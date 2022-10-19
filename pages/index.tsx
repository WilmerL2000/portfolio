import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll 
        z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0e7994]/80"
    >
      <Head>
        <title>Wilmer Lopez ~ Desarrollador Web</title>
        <meta
          name="description"
          content="Soy un desarrollador web orientado a trabajar inicialmente en el front-end, pero de igual manera me desenvuelvo en el back-end de aplicaciones web."
        />
        <link
          rel="/apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/*About*/}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/*Skills*/}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/*Projects*/}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/*Contact*/}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
