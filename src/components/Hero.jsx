import hero from '../assets/hero.jpg'

export default function Hero() {
  return (
    <div
      className="relative isolate min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-48 text-center">
        <h1 className="text-5xl font-bold text-white sm:text-7xl">
          Restoring Peace, Inspiring Hope
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Together we can uplift communities, save lives, and bring hope to those in need.
        </p>

        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="/donate"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Donate Now
          </a>

          <a
            href="/about"
            className="text-sm font-semibold text-white"
          >
            About
          </a>
        </div>
      </div>
    </div>
  )
}
