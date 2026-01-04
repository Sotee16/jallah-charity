const Contact = () => (
  <section id="contact" className="max-w-xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold text-center mb-6">
      Contact Us
    </h2>
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-3 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded p-3 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          rows="4"
          className="w-full border border-gray-300 rounded p-3 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="How can we help?"
        ></textarea>
      </div>

      <button className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-500">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
