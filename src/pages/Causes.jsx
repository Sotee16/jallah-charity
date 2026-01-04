import DonateCard from "../components/DonateCard";

const Causes = () => {
  return (
    <section id="causes" className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Our Programs
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <DonateCard title="Clean Water" description="Provide clean drinking water." />
        <DonateCard title="Education" description="Build better learning opportunities." />
        <DonateCard title="Healthcare" description="Support health programs." />
      </div>
    </section>
  );
};

export default Causes;
