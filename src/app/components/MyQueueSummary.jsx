'use client';

export default function MyQueueSummary({ tickets, queuedIds, onRemove, onClear }) {
  const queued = tickets.filter(t => queuedIds.has(t.id));

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-200">My Queue</h2>
        <span className="text-xs text-neutral-400">{queued.length} selected</span>
      </div>

      {queued.length === 0 ? (
        <p className="mt-2 text-xs text-neutral-400">No tickets in your queue.</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {queued.map(t => (
            <li key={t.id} className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="truncate text-sm">{t.title}</p>
                <p className="truncate text-[11px] text-neutral-400">{t.id}</p>
              </div>
              <button
                onClick={() => onRemove(t.id)}
                className="rounded border border-neutral-700 px-2 py-1 text-[11px] hover:bg-neutral-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={onClear}
        disabled={queued.length === 0}
        className="mt-3 w-full rounded-md bg-neutral-800 px-3 py-2 text-xs hover:bg-neutral-700 disabled:opacity-50"
      >
        Clear Queue
      </button>
    </div>
  );
}