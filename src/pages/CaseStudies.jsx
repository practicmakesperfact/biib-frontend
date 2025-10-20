
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    api.fetchCaseStudies().then((data => setCaseStudies(data)));
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Case Studies</h1>
      <div className="space-y-6">
        {caseStudies.map((c) => (
          <div key={c.id} className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
            <p className="text-gray-600 mb-3">{c.summary}</p>
            {c.press_link && (
              <a
                href={c.press_link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Read More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
