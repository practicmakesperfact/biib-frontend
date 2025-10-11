
// import { useState } from "react";

// export default function LicenseSelector({ licenses, basePrice, onSelect }) {
//   const [selected, setSelected] = useState(licenses[0]);

//   const handleChange = (license) => {
//     setSelected(license);
//     const finalPrice = (basePrice * license.multiplier).toFixed(2);
//     onSelect({ license, finalPrice });
//   };

//   return (
//     <div className="my-4">
//       <h3 className="text-lg font-semibold mb-2">Select License</h3>
//       <div className="space-y-2">
//         {licenses.map((license, index) => {
//           const price = (basePrice * license.multiplier).toFixed(2);
//           return (
//             <label
//               key={index}
//               className={`block border rounded-lg p-3 cursor-pointer ${
//                 selected.type === license.type
//                   ? "border-blue-600 bg-blue-50"
//                   : "border-gray-300"
//               }`}
//             >
//               <input
//                 type="radio"
//                 name="license"
//                 className="hidden"
//                 checked={selected.type === license.type}
//                 onChange={() => handleChange(license)}
//               />
//               <div className="flex justify-between items-center">
//                 <span>{license.type}</span>
//                 <span className="font-bold">${price}</span>
//               </div>
//             </label>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// src/components/product/LicenseSelector.jsx
import React from "react";

/**
 * props:
 *  - licenses: [{id,name,price,desc}]
 *  - basePrice
 *  - value (selected license)
 *  - onChange(license)
 */
export default function LicenseSelector({ licenses = [], basePrice = 0, value, onChange }) {
  const list = licenses.length ? licenses : [{ id: "basic", name: "Basic", price: basePrice, desc: "Personal use" }];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {list.map((lic) => (
        <label key={lic.id} className={`border rounded-lg p-3 cursor-pointer ${value?.id === lic.id ? "ring-2 ring-blue-500" : ""}`}>
          <input
            type="radio"
            name="license"
            value={lic.id}
            checked={value?.id === lic.id}
            onChange={() => onChange && onChange(lic)}
            className="sr-only"
          />
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{lic.name}</div>
              <div className="text-xs text-gray-500">{lic.desc || (lic.id === "basic" ? "Single build license" : "Commercial/reseller license")}</div>
            </div>
            <div className="text-right">
              <div className="font-medium">${(lic.price ?? basePrice)?.toFixed?.(2) ?? lic.price}</div>
              <div className="text-xs text-gray-500">one-time</div>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}
