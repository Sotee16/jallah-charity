import volunteer1 from "../assets/team/volunteer1.jpg";
import Board from "../components/Board";

export default function Volunteers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <Board/>

        <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
          Our Volunteers
        </h2>

        <p className="mb-12 text-gray-600">
          Passionate individuals donating time, skills, and love.
        </p>

        <div data-aos="zoom-in">
          <img src={volunteer1} className="mx-auto w-40 h-40 rounded-full" />
          <h4 className="mt-4 font-semibold">Community Volunteers</h4>
        </div>

      </div>
    </section>
  );
}
