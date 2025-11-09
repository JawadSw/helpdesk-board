'use client';

export default function TicketCard({ ticket, onAddToQueue, isQueued }) {
  const { id, title, description, priority, status, assignee, updatedAt } = ticket;

  return (
    <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-4 shadow-sm hover:shadow-md transition">
      <div className="mb-2">
        <div className="text-sm text-gray-400">Priority: {priority}</div>
        <div className="text-sm text-gray-400">Status: {status}</div>
      </div>

      <h3 className="font-semibold text-base text-gray-100 mb-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{description}</p>

      <p className="text-xs text-gray-500 mb-2">
        Assignee: {assignee}<br />
        Updated: {new Date(updatedAt).toLocaleString()}
      </p>

      <button
        onClick={() => onAddToQueue(id)}
        disabled={isQueued}
        className={`w-full mt-2 rounded-md px-3 py-2 text-sm font-medium ${
          isQueued
            ? 'bg-gray-600 cursor-not-allowed text-gray-200'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isQueued ? 'In My Queue' : 'Add to My Queue'}
      </button>
    </div>
  );
}