import type { MenuItem } from "@/lib/menus";

export function MenuSection({
  sectionId,
  title,
  intro,
  items,
}: {
  sectionId: string;
  title: string;
  intro?: string;
  items: MenuItem[];
}) {
  const headingId = `menu-${sectionId}`;
  return (
    <section className="scroll-mt-28" aria-labelledby={headingId}>
      <div className="mb-8 border-b border-cream-200 pb-6">
        <h2
          id={headingId}
          className="font-display text-3xl tracking-tight text-brand-900 sm:text-4xl"
        >
          {title}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-2xl text-lg text-brand-800/90">{intro}</p>
        ) : null}
      </div>
      <ul className="grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={`${sectionId}-${index}-${item.name}`}
            className="rounded-2xl border border-cream-200 bg-white p-6 shadow-sm shadow-brand-950/5 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-brand-900">{item.name}</h3>
              <span className="shrink-0 rounded-full bg-brand-900/5 px-3 py-1 text-sm font-semibold text-accent">
                {item.price}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-brand-800/88">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
