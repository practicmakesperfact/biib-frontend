// export default function Services() {
//   const services = [
//     {
//       title: "Custom House Plans",
//       desc: "Tailored designs for your unique needs.",
//     },
//     {
//       title: "3D Modeling",
//       desc: "Realistic renders to visualize your project.",
//     },
//     {
//       title: "Consultation",
//       desc: "Work with our architects for expert guidance.",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h1 className="text-3xl font-bold mb-8">Our Services</h1>
//       <div className="grid gap-6 md:grid-cols-3">
//         {services.map((s, i) => (
//           <div key={i} className="bg-white shadow rounded-xl p-6">
//             <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
//             <p className="text-gray-600">{s.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // assuming you're using react-router-dom

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch services from Django API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/services/");
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading services...</div>
      ) : services.length === 0 ? (
        <div className="text-center text-gray-500">No services available.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                <p className="text-gray-600 mb-4">{s.description}</p>

                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">Type:</span>{" "}
                  {s.service_type?.replace("_", " ")}
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Estimated Duration:</span>{" "}
                  {s.duration_days} days
                </div>

                <div className="text-lg font-bold text-indigo-600 mb-4">
                  ${s.price}
                </div>
              </div>

              <Link
                to={`/services/request-quote/${s.id}`}
                className="mt-4 inline-block text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
              >
                Request Quote
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
