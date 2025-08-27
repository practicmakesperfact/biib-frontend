export default function Tutorials() {
  const tutorials = [
    {
      title: "How to Choose a House Plan",
      link: "#",
    },
    {
      title: "Understanding Architectural Drawings",
      link: "#",
    },
    {
      title: "Beginner’s Guide to 3D Floor Plans",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Tutorials</h1>
      <ul className="space-y-4">
        {tutorials.map((t, i) => (
          <li key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <a
              href={t.link}
              className="text-blue-600 font-medium hover:underline"
            >
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
