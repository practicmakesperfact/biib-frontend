
import { useState } from "react";
import Button from "../ui/Button";

export default function SearchBar({
  defaultValue = "",
  onSearch,
  onOpenFilters,
}) {
  const [q, setQ] = useState(defaultValue);

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(q);
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search plans, styles, sqft…"
        className="input"
      />
      <Button type="submit">Search</Button>
      <Button type="button" variant="outline" onClick={onOpenFilters}>
        Filters
      </Button>
    </form>
  );
}
