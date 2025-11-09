'use client';

export default function PriorityFilter({ value, onChange }) {
  const options = ['All', 'Low', 'Medium', 'High', 'Critical'];
  return (
    <label className="block">
      <span className="text-xs text-neutral-300">Priority</span>
      <select
        className="mt-1 w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}