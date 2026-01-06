export default function Volunteer() {

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const message = form.message.value;

  const whatsappNumber = "231776471123"; // Rescue Liberia number

  const text = `
Volunteer Application:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
  `;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");

  form.reset();
}


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          Volunteer With <span className="text-[#B11226]">Rescue Liberia</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Volunteer?</h2>
            <p className="text-gray-700 mb-4">
              Volunteers are the heart of our mission. By joining Rescue Liberia,
              you help bring positive change to communities across the country.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Community outreach</li>
              <li>Education support</li>
              <li>Healthcare assistance</li>
              <li>Event coordination</li>
            </ul>
          </div>

          {/* Form */}
          <form
  onSubmit={handleSubmit}
  className="bg-gray-50 p-8 rounded-xl shadow space-y-5"
>
  <input
    name="name"
    placeholder="Full Name"
    required
    className="w-full border px-4 py-3 rounded-lg"
  />

  <input
    name="email"
    type="email"
    placeholder="Email Address"
    required
    className="w-full border px-4 py-3 rounded-lg"
  />

  <input
    name="phone"
    type="tel"
    placeholder="Phone Number"
    required
    className="w-full border px-4 py-3 rounded-lg"
  />

  <textarea
    name="message"
    rows="4"
    placeholder="Why do you want to volunteer?"
    className="w-full border px-4 py-3 rounded-lg"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
  >
    Send via WhatsApp
  </button>
</form>
</div>
      </div>
    </section>
  );
}
