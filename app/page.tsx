import Header from "./components/Header";
import Container from "./components/Container";
import Hero from "./components/Hero";
import About from "./components/About";
import CustomMarquee from "./components/Marquee";
import Activities from "./components/Activities";
import Figures from "./components/Figures";
import Partners from "./components/Partners";
import CallToction from "./components/CallToAction";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

export default function Home() {
  const marqueeText = [
    "Agriculture",
    "Pêche",
    "Elevage",
    "Actions humanitaires",
  ];
  return (
    <Container className="bg-background">
      <Header />
      <Hero />
      <About />
      <CustomMarquee textes={marqueeText} />
      <Activities />
      <Figures />
      <Partners />
      <CallToction />
      <Blog />
      <Contacts />
      <Footer />
    </Container>
  );
}
