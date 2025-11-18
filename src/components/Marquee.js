export function Marquee() {
  const text = "DONDE TODO EMPIEZA ";

  return (
    <div className="overflow-hidden bg-amber-500 py-2 border-y border-amber-600">

      <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite] md:animate-[marquee_20s_linear_infinite]">

        <span className="font-medium text-neutral-900 text-lg mx-4">{text}</span>
        <span className="font-bold text-neutral-900 text-lg mx-4">{text}</span>
        
        <span className="font-medium text-neutral-900 text-lg mx-4">{text}</span>
        <span className="font-bold text-neutral-900 text-lg mx-4">{text}</span>
        
        <span className="font-medium text-neutral-900 text-lg mx-4">{text}</span>
        <span className="font-bold text-neutral-900 text-lg mx-4">{text}</span>

        <span className="font-medium text-neutral-900 text-lg mx-4">{text}</span>
        <span className="font-bold text-neutral-900 text-lg mx-4">{text}</span>
        
        <span className="font-medium text-neutral-900 text-lg mx-4">{text}</span>
        <span className="font-bold text-neutral-900 text-lg mx-4">{text}</span>
        
        <span className="font-medium text-neutral-900 text-lg mx-4">{text}</span>
        <span className="font-bold text-neutral-900 text-lg mx-4">{text}</span>

      </div>
    </div>
  );
}