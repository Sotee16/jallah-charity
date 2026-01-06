import Hero from "../components/Hero";
import DonateCard from "../components/DonateCard";
 import Contact from "./Contact";
import About from "./About";
import Gallery from "./Gallery";
import Team from "./Team";
import Founder from "./founder";
import Testimonial from "./Testimonial";
import CharityEvents from "./Events"
import Container from "../components/Container"
import Programs from "./Programs";
import Impact from "./Impact";
import Volunteer from "./Volunteers";
 


const Home = () => {
  return (
    <Container>
      <Hero />
       <Programs />
        <Impact/>
       <Volunteer/>
      <Founder />
      <Testimonial />
      <CharityEvents />
       <Gallery />
       <Team />
      <About />
      <Contact />
    </Container>
  );
};

export default Home;
