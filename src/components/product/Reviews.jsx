
export default function Reviews({ reviews = [] }) {
  if (!reviews.length) return null;
  return (
    <div>
      <h4 className="font-medium mb-2">Reviews</h4>
      <div className="space-y-3">
        {reviews.map((r) => (
          <div key={r.id} className="border rounded p-3">
            <div className="flex items-center justify-between">
              <div className="font-medium">{r.name}</div>
              <div className="text-sm text-yellow-500">
                {"★".repeat(r.rating || 0)}
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-1">{r.text}</div>
            {r.verified && (
              <div className="text-xs text-green-600 mt-2">Verified buyer</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
