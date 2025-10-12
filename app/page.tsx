import Hero from "./components/Hero";
import About from "./components/About";
import CustomMarquee from "./components/Marquee";
import Projects from "./components/Projects";
import Figures from "./components/Figures";
import Partners from "./components/Partners";
import CallToction from "./components/CallToAction";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";

export default function Home() {
  const marqueeText = ["Agro", "Industrie", "Rurale"];
  return (
    <>
      <Hero />
      <About />
      <CustomMarquee textes={marqueeText} />
      <Projects />
      <Figures />
      <Partners />
      <CallToction />
      <Blog />
      <Contacts />
    </>
  );
}
