'use client'// app/loading.tsx
// Apare cat timp se incarca o pagina. Acelasi stil ca restul site-ului:
// grila de fundal, cadrul cu margini si patratele animate din hero.

const label = "text-[10px] font-mono tracking-widest text-slate-400 uppercase";
const frame = "relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80";

// Patratele se aprind pe rand (fiecare cu o mica intarziere)
const patrate = [
  "bg-[#EA580C]", "bg-slate-300/60", "border border-slate-300", "bg-[#F59E0B]",
  "bg-slate-300/60", "bg-[#0F172A]", "border border-slate-300", "bg-slate-300/60",
  "border border-slate-300", "bg-[#F59E0B]", "bg-slate-300/60", "bg-[#EA580C]",
];

export default function Loading() {
  return (
    <div className="relative w-full min-w-[375px] min-h-[calc(100dvh-60px)] bg-slate-100 overflow-hidden pt-10 sm:pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className={frame}>
        <div className="border-y border-slate-200/80 flex flex-col items-center justify-center text-center gap-6 min-h-[340px] sm:min-h-[420px] p-8">
          <div className="grid grid-cols-4 gap-1.5 w-28 sm:w-32" aria-hidden="true">
            {patrate.map((c, i) => (
              <div
                key={i}
                className={`aspect-square ${c} motion-safe:animate-pulse`}
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
          <p className={label} role="status">Se încarcă…</p>
        </div>
      </div>
    </div>
  );
}