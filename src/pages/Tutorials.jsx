import { useEffect, useState } from "react";

export default function Tutorials() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Dummy data fallback (before backend integration)
  const dummyTutorials = [
    {
      id: 1,
      title: "How to Choose a House Plan",
      youtube_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Learn how to select the perfect house plan for your needs.",
      categories: [{ id: 1, name: "Design", slug: "design" }],
      duration: "10:30",
    },
    {
      id: 2,
      title: "Understanding Architectural Drawings",
      youtube_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description:
        "A beginner-friendly explanation of architectural symbols and layouts.",
      categories: [{ id: 2, name: "Drawing", slug: "drawing" }],
      duration: "8:15",
    },
    {
      id: 3,
      title: "Beginner’s Guide to 3D Floor Plans",
      youtube_embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Visualize your designs with 3D floor plans easily.",
      categories: [{ id: 3, name: "3D Modeling", slug: "3d-modeling" }],
      duration: "12:05",
    },
  ];

  useEffect(() => {
    // 🟡 Uncomment this section when backend API is ready
    /*
    fetch("http://localhost:8000/api/content/tutorials/")
      .then((res) => res.json())
      .then((data) => setTutorials(data))
      .catch((err) => console.error("Failed to fetch tutorials:", err))
      .finally(() => setLoading(false));
    */

    // Temporary: show dummy tutorials
    setTutorials(dummyTutorials);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Loading tutorials...</p>
      </div>
    );
  }

  if (tutorials.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Tutorials</h1>
        <p className="text-gray-500">No tutorials available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">📺 Tutorials</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* YouTube Video Embed */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={t.youtube_embed_url}
                title={t.title}
                width="100%"
                height="200"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Text Content */}
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{t.title}</h2>
              <p className="text-sm text-gray-600">{t.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                <div className="flex gap-2 flex-wrap">
                  {t.categories &&
                    t.categories.map((c) => (
                      <span
                        key={c.id}
                        className="bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {c.name}
                      </span>
                    ))}
                </div>
                {t.duration && <span>⏱ {t.duration}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
