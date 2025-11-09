'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, onAddToQueue, queuedIds }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tickets.map((t) => (
        <TicketCard
          key={t.id}          
          ticket={t}
          onAddToQueue={onAddToQueue}
          isQueued={queuedIds.has(t.id)}
        />
      ))}
    </div>
  );
}