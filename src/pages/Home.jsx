import AboutMe from "../components/AboutMeSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Project";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
