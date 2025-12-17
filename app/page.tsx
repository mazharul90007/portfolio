import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import HomeWrapper from "@/components/HomeWrapper";

const page = () => {
  return (
    <HomeWrapper>
      <Hero />
      <AboutMe />
      <Education />
    </HomeWrapper>
  );
};

export default page;
