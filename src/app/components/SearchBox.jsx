'use client';

export default function SearchBox({ value, onChange, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs text-neutral-300">Search</span>
      <input
        type="text"
        className="mt-1 w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500"
        value={value}
        placeholder="Search title or description"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}