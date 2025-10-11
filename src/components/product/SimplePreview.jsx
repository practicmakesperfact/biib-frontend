
export default function SamplePreview({ url }) {
  if (!url) {
    return (
      <div className="p-4 border rounded text-sm text-gray-500">
        Sample not available
      </div>
    );
  }

  // embed PDF or show link
  return (
    <div className="border rounded overflow-hidden">
      <iframe src={url} className="w-full h-64" title="sample-preview" />
      <div className="p-2 text-sm text-gray-600">
        Watermarked preview — full files available after purchase.
      </div>
    </div>
  );
}
