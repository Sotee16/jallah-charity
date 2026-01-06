import { useParams } from "react-router-dom";
import { rescueLiberiaPrograms } from "../data/programs";

export default function ProgramDetails() {
  const { id } = useParams();
  const program = rescueLiberiaPrograms.find(p => p.id === id);

  if (!program) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Program Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1
          data-aos="fade-right"
          className="text-4xl font-bold mb-4"
        >
          {program.title}
        </h1>

        <p
          data-aos="fade-left"
          className="text-gray-700 max-w-3xl mb-8"
        >
          {program.description}
        </p>

        {/* Impact */}
        <div data-aos="fade-up" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Program Impact
          </h2>
          <p className="text-gray-700">
            {program.impact}
          </p>
        </div>

        {/* Beneficiaries */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Who This Program Helps
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {program.beneficiaries.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-2xl font-semibold mb-6"
          >
            Program Gallery
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {program.gallery.map((img, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="overflow-hidden rounded-xl shadow"
              >
                <img
                  src={img}
                  alt={program.title}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Donate CTA */}
        <div
          data-aos="fade-up"
          className="mt-16 bg-[#0B2C5D] text-white p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Support This Program
          </h3>
          <p className="mb-6">
            Your donation helps us reach more vulnerable communities across Liberia.
          </p>
           <div className="flex flex-wrap gap-4">
          <a
            href="/donate"
            className="bg-[#B11226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Donate Now
          </a>

          <a
            href="/Volunteers"
            className="border border-[#B11226] text-[#B11226] px-6 py-3 rounded-lg font-semibold hover:bg-[#B11226] hover:text-white transition"
          >
            Volunteer With Us
          </a>
        </div>
        </div>

      </div>
    </section>
  );
}
