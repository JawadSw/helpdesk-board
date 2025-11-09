'use client';
import TicketCard from './TicketCard';

export default function TicketList({ tickets, onAddToQueue, queuedIds }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Tickets</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tickets.map(t => (
          <li key={t.id}>
            <TicketCard
              ticket={t}
              onAddToQueue={onAddToQueue}
              isQueued={queuedIds.has(t.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}