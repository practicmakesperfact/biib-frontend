import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-neutral py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Your Dream Home Awaits
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Diverse & Inspired Designs from talented architects. New plans added
          daily.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/catalog"
            className="bg-primary text-white px-6 py-3 rounded-md text-lg"
          >
            Browse Plans
          </Link>
          <Link
            to="/services"
            className="border border-primary text-primary px-6 py-3 rounded-md text-lg"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
