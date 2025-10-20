// import { useEffect, useState } from "react";

// export default function Support() {
//   const [testimonials, setTestimonials] = useState([]);
//   const [partners, setPartners] = useState([]);
//   const [caseStudies, setCaseStudies] = useState([]);

//   //Later: Replace with real fetch from backend
//   useEffect(() => {
//     setTestimonials([
//       {
//         id: 1,
//         name: "John Doe",
//         message: "Great experience!",
//         company: "DreamHomes Inc.",
//         photo: null,
//       },
//       {
//         id: 2,
//         name: "Sarah Lee",
//         message: "Super fast service!",
//         company: "BuildRight",
//         photo: null,
//       },
//     ]);

//     setPartners([
//       {
//         id: 1,
//         name: "Partner A",
//         logo: "https://via.placeholder.com/100x40",
//         website: "#",
//       },
//       {
//         id: 2,
//         name: "Partner B",
//         logo: "https://via.placeholder.com/100x40",
//         website: "#",
//       },
//     ]);

//     setCaseStudies([
//       {
//         id: 1,
//         title: "Modern Villa Case Study",
//         summary: "How our design transformed a modern villa.",
//         slug: "modern-villa",
//       },
//       {
//         id: 2,
//         title: "Press Feature: BIIB Architects",
//         summary: "Featured in Architecture Today Magazine.",
//         slug: "press-feature",
//       },
//     ]);
//   }, []);

//   return (
//     <div className="container mx-auto px-6 py-12 space-y-16">
//       {/* 🟦 Testimonials */}
//       <section>
//         <h1 className="text-3xl font-bold mb-6">What Our Clients Say</h1>
//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((t) => (
//             <div key={t.id} className="bg-white shadow rounded-xl p-6">
//               {t.photo && (
//                 <img
//                   src={t.photo}
//                   alt={t.name}
//                   className="w-16 h-16 rounded-full mb-3"
//                 />
//               )}
//               <p className="italic mb-2">“{t.message}”</p>
//               <p className="font-semibold">{t.name}</p>
//               <p className="text-sm text-gray-500">{t.company}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/*Partners */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
//         <div className="flex flex-wrap gap-6 items-center justify-center">
//           {partners.map((p) => (
//             <a key={p.id} href={p.website} target="_blank" rel="noreferrer">
//               <img src={p.logo} alt={p.name} className="h-12 object-contain" />
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Case Studies & Press</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {caseStudies.map((c) => (
//             <div key={c.id} className="border rounded-lg p-4">
//               <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
//               <p className="text-gray-600 mb-3">{c.summary}</p>
//               <a
//                 href={`/case-studies/${c.slug}`}
//                 className="text-blue-600 hover:underline"
//               >
//                 Read More →
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/*Contact Form */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//         <form className="grid gap-4 max-w-md">
//           <input
//             placeholder="Name"
//             className="input border rounded-lg px-3 py-2"
//           />
//           <input
//             placeholder="Email"
//             className="input border rounded-lg px-3 py-2"
//           />
//           <input
//             placeholder="Subject"
//             className="input border rounded-lg px-3 py-2"
//           />
//           <textarea
//             placeholder="Message"
//             className="input border rounded-lg px-3 py-2"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//           >
//             Send Message
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import api from "../services/api";

export default function Support() {
  const [testimonials, setTestimonials] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.fetchTestimonials(), api.fetchPartners()])
      .then(([tData, pData]) => {
        setTestimonials(tData);
        setPartners(pData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-6">What Our Clients Say</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white shadow rounded-lg p-6">
              {t.photo && (
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 mx-auto"
                />
              )}
              <p className="italic text-gray-600 mb-2">“{t.message}”</p>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">
                {t.company || t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {partners.map((p) => (
            <a key={p.id} href={p.website} target="_blank" rel="noreferrer">
              <img
                src={p.logo}
                alt={p.name}
                className="w-full h-20 object-contain grayscale hover:grayscale-0 transition"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
