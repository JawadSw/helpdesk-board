'use client';

import { useEffect, useMemo, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

const STATUS_FLOW = ['Open', 'In Progress', 'On Hold', 'Resolved'];
const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

function nextStatus(s) {
  const i = STATUS_FLOW.indexOf(s);
  return i < 0 ? 'Open' : (i < STATUS_FLOW.length - 1 ? STATUS_FLOW[i + 1] : 'Resolved');
}
function tweakPriority(p) {
  const i = PRIORITIES.indexOf(p);
  if (i < 0) return 'Medium';
  const up = Math.random() < 0.5;
  if (up && i < PRIORITIES.length - 1) return PRIORITIES[i + 1];
  if (!up && i > 0) return PRIORITIES[i - 1];
  return p;
}

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch]   = useState('');
  const [queue, setQueue]     = useState({}); // { [id]: true }

  // fetch on mount
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch('/api/tickets', { cache: 'no-store' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (alive) setTickets(data);
      } catch {
        if (alive) setError('Unable to load tickets.');
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // live updates 6–10s with cleanup
  useEffect(() => {
    if (!tickets.length) return;
    let timer;
    const min = 6000, max = 10000;

    const run = () => {
      const delay = Math.floor(Math.random() * (max - min + 1)) + min;
      timer = setTimeout(() => {
        setTickets(prev => {
          if (!prev.length) return prev;
          const idx = Math.floor(Math.random() * prev.length);
          const t = prev[idx];
          const changeStatus = Math.random() < 0.6; // status more likely than priority

          const updated = {
            ...t,
            status: changeStatus ? nextStatus(t.status) : t.status,
            priority: changeStatus ? t.priority : tweakPriority(t.priority),
            updatedAt: new Date().toISOString()
          };

          const arr = [...prev];
          arr[idx] = updated;
          return arr;
        });
        run();
      }, delay);
    };

    run();
    return () => clearTimeout(timer);
  }, [tickets.length]);

  const visibleTickets = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tickets.filter(t => {
      const sOk = filters.status === 'All' || t.status === filters.status;
      const pOk = filters.priority === 'All' || t.priority === filters.priority;
      const qOk = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
      return sOk && pOk && qOk;
    });
  }, [tickets, filters, search]);

  const addToQueue = (id) =>
    setQueue(prev => prev[id] ? prev : { ...prev, [id]: true });

  const removeFromQueue = (id) =>
    setQueue(prev => { const n = { ...prev }; delete n[id]; return n; });

  const clearQueue = () => setQueue({});

  const queuedIds = useMemo(() => new Set(Object.keys(queue)), [queue]);
  const isEmpty = !loading && !error && visibleTickets.length === 0;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left: filters + list */}
      <div className="lg:col-span-9 space-y-4">
        <div className="grid gap-3 md:grid-cols-4">
          <StatusFilter
            value={filters.status}
            onChange={(v) => setFilters(f => ({ ...f, status: v }))}
          />
          <PriorityFilter
            value={filters.priority}
            onChange={(v) => setFilters(f => ({ ...f, priority: v }))}
          />
          <SearchBox
            value={search}
            onChange={setSearch}
            className="md:col-span-2"
          />
        </div>

        <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />

        {!loading && !error && visibleTickets.length > 0 && (
          <TicketList
            tickets={visibleTickets}
            onAddToQueue={addToQueue}
            queuedIds={queuedIds}
          />
        )}
      </div>

      {/* Right: queue */}
      <aside className="lg:col-span-3">
        <MyQueueSummary
          tickets={tickets}
          queuedIds={queuedIds}
          onRemove={removeFromQueue}
          onClear={clearQueue}
        />
      </aside>
    </section>
  );
}