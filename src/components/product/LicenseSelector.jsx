import React from "react";

/**
 * props:
 *  - licenses: [{id,name,price,desc}]
 *  - basePrice
 *  - value (selected license)
 *  - onChange(license)
 */
export default function LicenseSelector({ licenses = [], basePrice = 0, value, onChange }) {
  const list = licenses.length
    ? licenses
    : [{ id: "basic", name: "Basic", price: basePrice, desc: "Personal use" }];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {list.map((lic) => (
        <label
          key={lic.id}
          className={`border rounded-lg p-3 cursor-pointer min-w-[120px] break-words text-sm sm:text-base ${
            value?.id === lic.id ? "ring-2 ring-blue-500" : ""
          }`}
        >
          <input
            type="radio"
            name="license"
            value={lic.id}
            checked={value?.id === lic.id}
            onChange={() => onChange && onChange(lic)}
            className="sr-only"
          />
          <div className="flex flex-col justify-between h-auto sm:h-26">
            <div className="flex-1">
              <div className="font-semibold break-words">{lic.name}</div>
              <div className="text-xs text-gray-500 mt-1 break-words leading-snug">
                {lic.desc ||
                  (lic.id === "basic"
                    ? "Single build license"
                    : "Commercial/reseller license")}
              </div>
            </div>
            <div className="text-right mt-2">
              <div className="font-medium whitespace-nowrap">
                ${(lic.price ?? basePrice)?.toFixed?.(2) ?? lic.price}
              </div>
              <div className="text-xs text-gray-500 py-1">one-time</div>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}
