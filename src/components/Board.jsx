import board1 from "../assets/board/board1.jpg";
import board2 from "../assets/board/board2.jpg";

const board = [
  { name: "Grace Williams", role: "Board Chair", image: board1 },
  { name: "Michael Brown", role: "Board Secretary", image: board2 },
];

export default function Board() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
          Board of Directors
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {board.map((b, i) => (
            <div key={i} data-aos="flip-left">
              <img src={b.image} className="mx-auto w-28 h-28 rounded-full" />
              <h4 className="mt-4 font-semibold">{b.name}</h4>
              <p className="text-sm text-gray-600">{b.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
