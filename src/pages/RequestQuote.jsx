import { useParams } from "react-router-dom";
import { useState } from "react";

export default function RequestQuote() {
  const { serviceId } = useParams(); // capture the ID from the URL
  const [formData, setFormData] = useState({
    brief: "",
    budget: "",
    file: null,
    preferred_date: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", { serviceId, ...formData });
    alert(
      `Quote request for service ID ${serviceId} submitted (frontend only)`
    );
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Request a Quote</h1>
      <p className="text-gray-600 mb-4">
        You are requesting a quote for service <strong>#{serviceId}</strong>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Brief</label>
          <textarea
            name="brief"
            className="w-full border rounded-lg p-2"
            placeholder="Describe your requirements..."
            rows="4"
            value={formData.brief}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Budget ($)</label>
          <input
            type="number"
            name="budget"
            className="w-full border rounded-lg p-2"
            placeholder="e.g. 5000"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Upload File</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Preferred Date (optional)
          </label>
          <input
            type="date"
            name="preferred_date"
            className="w-full border rounded-lg p-2"
            value={formData.preferred_date}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
