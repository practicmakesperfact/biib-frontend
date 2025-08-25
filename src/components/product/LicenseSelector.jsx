
import { useState } from "react";

export default function LicenseSelector({ licenses, basePrice, onSelect }) {
  const [selected, setSelected] = useState(licenses[0]);

  const handleChange = (license) => {
    setSelected(license);
    const finalPrice = (basePrice * license.multiplier).toFixed(2);
    onSelect({ license, finalPrice });
  };

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold mb-2">Select License</h3>
      <div className="space-y-2">
        {licenses.map((license, index) => {
          const price = (basePrice * license.multiplier).toFixed(2);
          return (
            <label
              key={index}
              className={`block border rounded-lg p-3 cursor-pointer ${
                selected.type === license.type
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="license"
                className="hidden"
                checked={selected.type === license.type}
                onChange={() => handleChange(license)}
              />
              <div className="flex justify-between items-center">
                <span>{license.type}</span>
                <span className="font-bold">${price}</span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
