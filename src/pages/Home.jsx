import Hero from "../components/Hero";
import DonateCard from "../components/DonateCard";
import Causes from "./Causes";
import Contact from "./Contact";
import About from "./About";
import Gallery from "./Gallery";
import Team from "./Team";
import Founder from "./founder";
import Testimonial from "./Testimonial";
import CharityEvents from "./Events"
import Container from "../components/Container"


const Home = () => {
  return (
    <Container>
      <Hero />
       
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Causes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <DonateCard
            title="Education"
            description="Support education for underprivileged children."
          />
          <DonateCard
            title="Healthcare"
            description="Provide medical care to communities in need."
          />
          <DonateCard
            title="Food Support"
            description="Help families with food and basic necessities."
          />
        </div>
      </section>
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
