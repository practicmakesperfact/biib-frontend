export default function Services() {
  const services = [
    {
      title: "Custom House Plans",
      desc: "Tailored designs for your unique needs.",
    },
    {
      title: "3D Modeling",
      desc: "Realistic renders to visualize your project.",
    },
    {
      title: "Consultation",
      desc: "Work with our architects for expert guidance.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
