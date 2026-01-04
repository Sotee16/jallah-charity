import DonateCard from '../components/DonateCard';

const Donate = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Support Our Programs
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Your donation helps us provide education, healthcare, and hope to
          vulnerable communities across Liberia.
        </p>

        <div className="flex justify-center">
          <DonateCard />
        </div>

      </div>
    </section>
  );
};

export default Donate;
