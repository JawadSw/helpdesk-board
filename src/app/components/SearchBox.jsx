'use client';

export default function SearchBox({ value, onChange, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">Search</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title or description…"
        className="w-full border rounded-md px-2 py-1 text-sm"
      />
    </div>
  );
}