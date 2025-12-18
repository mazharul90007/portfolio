import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import HomeWrapper from "@/components/HomeWrapper";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <HomeWrapper>
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Contact />
    </HomeWrapper>
  );
};

export default page;
