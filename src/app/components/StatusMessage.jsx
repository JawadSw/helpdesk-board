'use client';

export default function StatusMessage({ type }) {
  const messages = {
    loading: 'Loading…',
    error: 'Unable to load tickets.',
    empty: 'No tickets match your filters.'
  };

  return (
    <div className="p-3 text-sm text-gray-700 border rounded-xl bg-white/60">
      {messages[type] || ''}
    </div>
  );
}