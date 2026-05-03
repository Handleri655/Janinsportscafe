import Image from "next/image";
import Link from "next/link";
import { mapsUrl } from "@/lib/site";

export function LocationCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  mapQuery,
}: {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  mapQuery: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-md shadow-brand-950/5 transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/15 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl text-white drop-shadow-sm sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-brand-800/90">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-brand-800"
          >
            Tutustu →
          </Link>
          <a
            href={mapsUrl(mapQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-brand-800/25 bg-cream-50 px-5 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-800 hover:bg-cream-100"
          >
            Kartta
          </a>
        </div>
      </div>
    </article>
  );
}
