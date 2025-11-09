import Board from './components/Board';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Helpdesk Ticket Board</h1>
      <p className="mt-2 mb-6 text-xs sm:text-sm text-neutral-400">
        Filter by status and priority, search by keyword, and add tickets to your queue.
      </p>
      <Board />
    </main>
  );
}