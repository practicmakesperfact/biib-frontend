import { useState } from "react";
import api from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.submitContactForm(form);
      setStatus(" Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus(" Failed to send. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          className="input"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          type="email"
          className="input"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          className="input"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="input h-32"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
        {status && <p className="mt-2 text-center">{status}</p>}
      </form>
    </div>
  );
}
