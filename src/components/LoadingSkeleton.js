export function LoadingSkeleton({ type = "card" }) {
  if (type === "card") {
    return (
      <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 animate-pulse">
        <div className="aspect-[4/3] bg-neutral-800" />
        <div className="p-4 space-y-3">
          <div className="h-5 bg-neutral-800 rounded w-3/4" />
          <div className="h-6 bg-neutral-800 rounded w-1/2" />
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-neutral-800 rounded" />
            <div className="flex-1 h-10 bg-neutral-800 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "detail") {
    return (
      <div className="container mx-auto px-4 py-12 animate-pulse">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square bg-neutral-800 rounded-xl" />
            <div className="space-y-6">
              <div className="h-10 bg-neutral-800 rounded w-3/4" />
              <div className="h-12 bg-neutral-800 rounded w-1/2" />
              <div className="space-y-2">
                <div className="h-4 bg-neutral-800 rounded" />
                <div className="h-4 bg-neutral-800 rounded" />
                <div className="h-4 bg-neutral-800 rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
