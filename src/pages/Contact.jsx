export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const whatsappNumber = "231776471123"; // Liberia WhatsApp number (NO +)

    const text = `
New Contact Message 🚨

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
    form.reset();
  };

  return (
    <section id="contact" className="py-16 bg-[#0B2C5D]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <div className="text-white">
          <h5 className="text-[#B11226] uppercase font-semibold mb-2">
            Contact Us
          </h5>

          <h2 className="text-4xl font-bold mb-6">
            Get in Touch with <span className="text-[#B11226]">Rescue Liberia</span>
          </h2>

          <p className="text-gray-200 mb-6 leading-relaxed">
            For donations, emergency support, partnerships, or general inquiries,
            please fill out the contact form. Our team is ready to respond.
          </p>

          <div className="space-y-4">
            <p>📞 <strong>Phone:</strong> +231 776 471 123</p>
            <p>📧 <strong>Email:</strong> rescueliberia@gmail.com</p>
            <p>📍 <strong>Location:</strong> Monrovia, Liberia</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 shadow-lg space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              required
              type="text"
              placeholder="First Name"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
            />
            <input
              name="lastName"
              required
              type="text"
              placeholder="Last Name"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
            />
          </div>

          <input
            name="email"
            required
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
          />

          <input
            name="phone"
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
          />

          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B11226]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#B11226] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
