import { useEffect, useState } from "react";

import img1 from "../assets/gallery/help1.jpg";
import img2 from "../assets/gallery/help2.jpg";
import img3 from "../assets/gallery/help3.jpg";
import img4 from "../assets/gallery/help4.jpg";

const images = [
  { src: img1, caption: "Food support for vulnerable families" },
  { src: img2, caption: "Medical outreach to rural communities" },
  { src: img3, caption: "Education support for children" },
  { src: img4, caption: "Community empowerment program" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Our Impact Gallery</h1>
          <p className="mt-3 text-gray-600">
            Stories captured from communities we’ve helped.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[current].src}
            alt={images[current].caption}
            onClick={() => setLightbox(images[current])}
            className="w-full h-[420px] object-cover cursor-pointer transition duration-700"
          />

          {/* Caption */}
          <div className="absolute bottom-0 w-full bg-black/60 p-4">
            <p className="text-white text-center text-lg">
              {images[current].caption}
            </p>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 text-xl"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 text-xl"
          >
            ›
          </button>
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="max-w-4xl w-full">
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="mt-4 text-center text-white text-lg">
                {lightbox.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
