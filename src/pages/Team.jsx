import { useState } from "react";
import leader1 from "../assets/team/leader1.jpg";
import leader2 from "../assets/team/leader2.jpg";

const leaders = [
  {
    name: "Jallah Kamara",
    role: "Founder & Executive Director",
    image: leader1,
    bio: "Jallah Kamara founded the organization to restore hope and dignity to underserved communities.",
  },
  {
    name: "Daniel Morris",
    role: "Programs Director",
    image: leader2,
    bio: "Daniel oversees community outreach, education, and humanitarian programs.",
  },
];

export default function Team() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Leadership Team
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {leaders.map((p, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              onClick={() => setActive(p)}
              className="cursor-pointer text-center"
            >
              <img src={p.image} className="mx-auto w-32 h-32 rounded-full object-cover shadow-lg" />
              <h3 className="mt-4 font-semibold">{p.name}</h3>
              <p className="text-indigo-600 text-sm">{p.role}</p>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {active && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setActive(null)}
          >
            <div className="bg-white max-w-md ">
              <img src={active.image} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-bold text-center">{active.name}</h3>
              <p className="text-indigo-600 text-center">{active.role}</p>
              <p className="mt-4 text-gray-600 text-center">{active.bio}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
