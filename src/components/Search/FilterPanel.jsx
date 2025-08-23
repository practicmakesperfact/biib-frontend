
import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

const FILE_TYPES = ["PDF", "DWG", "CAD", "SketchUp", "3D"];

export default function FiltersPanel({
  open,
  onClose,
  initial = {},
  onApply,
  onClear,
}) {
  const [filters, setFilters] = useState({
    style: "",
    beds: "",
    baths: "",
    stories: "",
    sqftMin: "",
    sqftMax: "",
    priceMin: "",
    priceMax: "",
    fileTypes: [],
  });

  useEffect(() => {
    setFilters((f) => ({ ...f, ...initial }));
  }, [initial]);

  const toggleFileType = (ft) => {
    setFilters((f) => {
      const has = f.fileTypes.includes(ft);
      return {
        ...f,
        fileTypes: has
          ? f.fileTypes.filter((t) => t !== ft)
          : [...f.fileTypes, ft],
      };
    });
  };

  const apply = () => onApply?.(filters);

  const clear = () => {
    const cleared = {
      style: "",
      beds: "",
      baths: "",
      stories: "",
      sqftMin: "",
      sqftMax: "",
      priceMin: "",
      priceMax: "",
      fileTypes: [],
    };
    setFilters(cleared);
    onClear?.(cleared);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Advanced Filters"
      footer={
        <>
          <Button variant="outline" onClick={clear}>
            Clear
          </Button>
          <Button onClick={apply}>Apply</Button>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">Style</label>
          <select
            className="input"
            value={filters.style}
            onChange={(e) => setFilters({ ...filters, style: e.target.value })}
          >
            <option value="">Any</option>
            <option value="Modern">Modern</option>
            <option value="Ranch">Ranch</option>
            <option value="Tiny Home">Tiny Home</option>
            <option value="Duplex">Duplex</option>
            <option value="Coastal">Coastal</option>
            <option value="Cabin">Cabin</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="label">Beds</label>
            <input
              type="number"
              min="0"
              className="input"
              value={filters.beds}
              onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
            />
          </div>
          <div>
            <label className="label">Baths</label>
            <input
              type="number"
              min="0"
              className="input"
              value={filters.baths}
              onChange={(e) =>
                setFilters({ ...filters, baths: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">Stories</label>
            <input
              type="number"
              min="0"
              className="input"
              value={filters.stories}
              onChange={(e) =>
                setFilters({ ...filters, stories: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label">Sqft (Min)</label>
            <input
              type="number"
              min="0"
              className="input"
              value={filters.sqftMin}
              onChange={(e) =>
                setFilters({ ...filters, sqftMin: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">Sqft (Max)</label>
            <input
              type="number"
              min="0"
              className="input"
              value={filters.sqftMax}
              onChange={(e) =>
                setFilters({ ...filters, sqftMax: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label">Price (Min)</label>
            <input
              type="number"
              min="0"
              className="input"
              value={filters.priceMin}
              onChange={(e) =>
                setFilters({ ...filters, priceMin: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">Price (Max)</label>
            <input
              type="number"
              min="0"
              className="input"
              value={filters.priceMax}
              onChange={(e) =>
                setFilters({ ...filters, priceMax: e.target.value })
              }
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="label">File Types</label>
          <div className="flex flex-wrap gap-3">
            {FILE_TYPES.map((ft) => (
              <label key={ft} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.fileTypes.includes(ft)}
                  onChange={() => toggleFileType(ft)}
                />
                <span className="badge">{ft}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
