import { useEffect, useState } from "react";

export default function LicensePolicy() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    setPolicy({
      title: "License Policy",
      content: `
        <p>All house plans are licensed for single use only unless otherwise specified.</p>
        <p>You may not redistribute, resell, or modify without permission.</p>
      `,
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
