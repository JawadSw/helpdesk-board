'use client';

export default function TicketCard({ ticket, onAddToQueue, isQueued }) {
  const { id, title, description, priority, status, assignee, updatedAt } = ticket;

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold text-neutral-100">{title}</h3>
        <span className="text-[10px] text-neutral-400">
          Updated {new Date(updatedAt).toLocaleString()}
        </span>
      </div>

      <p className="mt-2 text-xs text-neutral-300">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-neutral-300">
        <span className="inline-flex items-center rounded border border-neutral-700 px-2 py-1">
          Priority: <span className="ml-1 font-medium">{priority}</span>
        </span>
        <span className="inline-flex items-center rounded border border-neutral-700 px-2 py-1">
          Status: <span className="ml-1 font-medium">{status}</span>
        </span>
        <span className="inline-flex items-center rounded border border-neutral-700 px-2 py-1">
          Assignee: <span className="ml-1 font-medium">{assignee}</span>
        </span>
        <span className="inline-flex items-center rounded border border-neutral-700 px-2 py-1">
          ID: <span className="ml-1 font-mono">{id}</span>
        </span>
      </div>

      <div className="mt-4">
        <button
          onClick={() => onAddToQueue(id)}
          disabled={isQueued}
          className="w-full rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-500 disabled:opacity-50"
        >
          {isQueued ? 'In My Queue' : 'Add to My Queue'}
        </button>
      </div>
    </div>
  );
}
