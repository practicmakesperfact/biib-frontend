import { useState } from "react";

export default function Resources() {
  const tutorials = [
    {
      id: 1,
      title: "How to Choose a House Plan",
      category: "Design",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Printing Guidelines",
      category: "Printing",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Top 5 Modern House Design Trends",
      date: "2025-10-10",
      category: "Design Trends",
    },
    {
      id: 2,
      title: "Beginner’s Guide to Modifying Plans",
      date: "2025-09-20",
      category: "Guides",
    },
  ];

  const faqs = [
    {
      category: "Licensing",
      questions: [
        {
          q: "Can I use the plan more than once?",
          a: "No, each license is for one build unless you purchase a multi-use license.",
        },
      ],
    },
    {
      category: "Printing",
      questions: [
        {
          q: "What paper size should I use?",
          a: "We recommend A1 for architectural prints.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-6">📺 Tutorials</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow rounded-xl overflow-hidden"
            >
              <iframe
                width="100%"
                height="200"
                src={t.youtubeUrl}
                title={t.title}
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm text-gray-500">{t.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-6">📝 Blog & Guides</h1>
        <div className="space-y-4">
          {blogs.map((b) => (
            <div key={b.id} className="border-b pb-3">
              <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                {b.title}
              </h3>
              <p className="text-sm text-gray-500">
                {b.category} • {new Date(b.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-6">❓ FAQs & Knowledge Base</h1>
        <div>
          {faqs.map((cat, idx) => (
            <div key={idx} className="mb-4">
              <button
                onClick={() =>
                  setOpenCategory(openCategory === idx ? null : idx)
                }
                className="w-full text-left font-semibold text-lg py-2 px-3 bg-gray-100 rounded"
              >
                {cat.category}
              </button>
              {openCategory === idx && (
                <div className="bg-white border p-3">
                  {cat.questions.map((q, i) => (
                    <div key={i} className="mb-3">
                      <p className="font-semibold">{q.q}</p>
                      <p className="text-gray-600">{q.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
