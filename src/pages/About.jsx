import React from "react";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          About <span className="text-[#B11226]"> Rescue Liberia for better Life</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Rescue Liberia is a humanitarian organization committed to restoring
              peace, inspiring hope, and improving the lives of vulnerable
              communities across Liberia.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We focus on education, healthcare, emergency relief, and community
              empowerment to ensure no one is left behind.
            </p>
          </div>

          <img
            src="/assets/about.jpg"
            alt="About Rescue Liberia"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide humanitarian support, education, healthcare, and hope
              to vulnerable individuals and communities in Liberia.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              A peaceful Liberia where every person has access to opportunity,
              dignity, and a better future.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
