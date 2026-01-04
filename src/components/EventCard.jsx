// src/components/EventCard.jsx
export default function EventCard({ title, date, imageUrl, description, link }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
}
