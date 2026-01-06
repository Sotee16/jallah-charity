import { Link } from "react-router-dom";
import { rescueLiberiaPrograms } from "../data/programs";

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section title */}
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-4"
        >
          Our Causes
        </h2>

        {/* Section description */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Rescue Liberia is committed to restoring dignity, saving lives, and
          inspiring hope through impactful humanitarian programs.
        </p>

        {/* Program cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {rescueLiberiaPrograms.map((program, index) => (
            <Link
              key={program.id}
              to={`/programs/${program.id}`}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Program image */}
              {program.gallery && program.gallery.length > 0 && (
                <img
                  src={program.gallery[0]} // first image in gallery
                  alt={program.title}
                  className="w-full h-48 object-cover mb-4"
                />
              )}

              {/* Program title */}
              <h3 className="text-xl font-semibold mb-2 px-4 pt-2">
                {program.title}
              </h3>

              {/* Program description */}
              <p className="text-gray-600 mb-4 px-4">
                {program.description.substring(0, 120)}...
              </p>

              {/* Learn More link */}
              <span className="text-[#B11226] font-semibold px-4 pb-4 mt-auto inline-block">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
