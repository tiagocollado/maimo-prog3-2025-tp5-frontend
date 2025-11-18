import Link from "next/link";
import Image from "next/image";

export default function ArtistCard({ artist }) {
  return (
    <Link href={`/artists/${artist.slug}`}>
      <article className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 hover:border-amber-500/50 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20">
        <div className="relative aspect-square">
          {artist.imageUrl ? (
            <Image
              src={artist.imageUrl || "/placeholder.svg"}
              alt={artist.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <span className="text-6xl text-amber-500">🎸</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-100 group-hover:text-amber-500 transition">
            {artist.name}
          </h3>
          {artist.bio && (
            <p className="mt-2 text-sm text-gray-400 line-clamp-2">
              {artist.bio}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
