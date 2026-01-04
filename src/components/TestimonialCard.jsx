// src/components/TestimonialCard.jsx

export default function TestimonialCard({ name, role, imageUrl, quote }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img
        className="w-16 h-16 rounded-full mb-4"
        src={imageUrl}
        alt={name}
      />
      <p className="text-gray-700 italic mb-2">&quot;{quote}&quot;</p>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-indigo-600 text-sm">{role}</p>
    </div>
  );
}
