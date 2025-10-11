
import { useState } from "react";

/**
 * files: [{id,name,type,key}]
 * productId: number
 */
export default function DownloadList({ files = [], productId }) {
  const [loadingId, setLoadingId] = useState(null);

  async function handleDownload(file) {
    setLoadingId(file.id);
    // MOCK: simulate fetching signed URL
    await new Promise((r) => setTimeout(r, 500));
    // in real app: call backend -> /api/orders/:id/download or /api/files/signed?product=...
    const signed = file.url || "#"; // placeholder
    setLoadingId(null);
    // for demo, open in new tab (if # nothing happens)
    if (signed && signed !== "#") window.open(signed, "_blank");
    else alert("Demo download — implement backend signed URL.");
  }

  return (
    <ul className="space-y-2">
      {files.map((f) => (
        <li
          key={f.id}
          className="flex items-center justify-between border rounded p-2"
        >
          <div>
            <div className="font-medium">{f.name}</div>
            <div className="text-xs text-gray-500">{f.type}</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDownload(f)}
              className="px-3 py-1 bg-gray-50 rounded border"
            >
              {loadingId === f.id ? "Preparing..." : "Download"}
            </button>
            <span className="text-xs text-gray-400">{f.size || ""}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
