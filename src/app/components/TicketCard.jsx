'use client';

export default function TicketCard({ ticket, onAddToQueue, isQueued }) {
  const { id, title, description, priority, status, assignee, updatedAt } = ticket;

  return (
    <div className="rounded-2xl border p-4 shadow-sm bg-white">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs text-gray-500">
          Updated {new Date(updatedAt).toLocaleString()}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-700">{description}</p>
     
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => onAddToQueue(id)}
          disabled={isQueued}
          className="rounded-xl border px-3 py-2 text-sm disabled:opacity-50"
        >
          {isQueued ? 'In My Queue' : 'Add to My Queue'}
        </button>
        {isQueued && <span className="text-xs text-gray-500">Already in your queue</span>}
      </div>
    </div>
  );
}