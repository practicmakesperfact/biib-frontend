export default function Services() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="p-4 bg-gray-50 shadow rounded">
        <h3 className="font-bold text-lg">Custom Design</h3>
        <p className="text-gray-600 mt-2">
          Work with our architects to design a home that fits your vision.
        </p>
      </div>
      <div className="p-4 bg-gray-50 shadow rounded">
        <h3 className="font-bold text-lg">3D Modeling</h3>
        <p className="text-gray-600 mt-2">
          Get realistic 3D models and renders of your future home.
        </p>
      </div>
      <div className="p-4 bg-gray-50 shadow rounded">
        <h3 className="font-bold text-lg">Construction Support</h3>
        <p className="text-gray-600 mt-2">
          Our experts guide your builders with detailed drawings.
        </p>
      </div>
    </div>
  );
}
