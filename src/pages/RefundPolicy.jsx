import { useEffect, useState } from "react";
import api from "../services/api";

export default function RefundPolicy() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    // Later this will be real API, now static mock
    setPolicy({
      title: "Refund Policy",
      content: "We offer a 14-day refund policy on all plan purchases...",
    });
  }, []);

  if (!policy) return <div className="container mx-auto py-12">Loading...</div>;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{policy.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: policy.content }}
      />
    </div>
  );
}
