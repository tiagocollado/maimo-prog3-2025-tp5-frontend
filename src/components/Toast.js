export function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-amber-500 text-neutral-900 px-6 py-3 rounded-lg font-semibold shadow-lg animate-bounce">
      {message}
    </div>
  );
}
