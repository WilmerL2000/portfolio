import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !pageInfo && !skills && !projects && !socials) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll 
        z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0e7994]/80 scroll-smooth"
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
      <div className="">
        <Navbar />
        <div className="flex flex-col">
          <div className="flex-1">
            <div className="md:px-36 px-2">
              <section id="hero">
                <Hero pageInfo={pageInfo} />
              </section>
              <section id="about">
                <About pageInfo={pageInfo} />
              </section>
              <section id="skills">
                <Skills skills={skills} />
              </section>
              <section id="projects">
                <Projects projects={projects} />
              </section>
              <section id="contact">
                <ContactMe pageInfo={pageInfo} />
              </section>
            </div>
          </div>
          <div className="md:fixed md:left-0 md:h-screen md:flex items-center justify-center">
            <Sidebar socials={socials} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
