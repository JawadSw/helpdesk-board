'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return (
      <div className="rounded border border-yellow-900 bg-yellow-950/60 p-3 text-yellow-200">
        Loading…
      </div>
    );
  }
  if (error) {
    return (
      <div className="rounded border border-red-900 bg-red-950/60 p-3 text-red-200">
        Unable to load tickets.
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="rounded border border-blue-900 bg-blue-950/60 p-3 text-blue-200">
        No tickets match your filters.
      </div>
    );
  }
  return null;
}