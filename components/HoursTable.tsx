export function HoursTable({
  title,
  rows,
}: {
  title: string;
  rows: readonly { label: string; value: string }[];
}) {
  return (
    <div className="rounded-2xl border border-cream-200 bg-white p-6 shadow-sm">
      <h3 className="font-display text-xl text-brand-900">{title}</h3>
      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-wrap items-baseline justify-between gap-2 border-b border-cream-100 pb-3 last:border-0 last:pb-0"
          >
            <dt className="font-medium text-brand-800">{row.label}</dt>
            <dd className="tabular-nums text-brand-950">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
