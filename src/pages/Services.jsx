
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

export default function Services() {
  // Temporary static data (mimics Django API response)
  const services = [
    {
      id: 1,
      title: "Custom Plan Design",
      description:
        "Tailored house plans designed to meet your unique needs and preferences.",
      service_type: "custom_plan",
      price: 3000,
      duration_days: 14,
    },
    {
      id: 2,
      title: "Plan Modifications",
      description:
        "Modify existing plans to match your vision, saving time and costs.",
      service_type: "modification",
      price: 1500,
      duration_days: 7,
    },
    {
      id: 3,
      title: "Permit-Ready Packages",
      description:
        "Get architectural plans ready for permitting with all required documentation.",
      service_type: "permit_ready",
      price: 2500,
      duration_days: 10,
    },
    {
      id: 4,
      title: "Consultation",
      description:
        "Schedule a session with our architects for professional guidance.",
      service_type: "consultation",
      price: 200,
      duration_days: 1,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-4">{s.description}</p>

              <div className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Type:</span>{" "}
                {s.service_type.replace("_", " ")}
              </div>

              <div className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Duration:</span>{" "}
                {s.duration_days} days
              </div>

              <div className="text-lg font-bold text-indigo-600 mt-2">
                ${s.price.toLocaleString()}
              </div>
            </div>

            <button>
              <Link
                to={`/services/request-quote/${s.id}`}
                className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg text-center hover:bg-indigo-700 transition"
              >
                Request Quote
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
