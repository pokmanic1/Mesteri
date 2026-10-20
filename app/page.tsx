import Link from "next/link";
import { OrangeButon, WhiteButon } from "@/components/Buton";

const categorii = [
  { nr: "01", cheie: "electric", nume: "Electricieni", text: "Prize, tablouri, iluminat, defecțiuni" },
  { nr: "02", cheie: "instalator", nume: "Instalatori", text: "Țevi, centrale, boilere, canalizare" },
  { nr: "03", cheie: "zugrav", nume: "Zugravi", text: "Zugrăveli, gletuit, tapet, rigips" },
  { nr: "04", cheie: "inginer", nume: "Ingineri", text: "Proiecte, consultanță, topografie" },
];

const pasi = [
  { nr: "01", titlu: "Alegi categoria", text: "Electrician, instalator, zugrav sau inginer." },
  { nr: "02", titlu: "Vezi meșterul", text: "Lucrări reale și ani de experiență, clar afișate." },
  { nr: "03", titlu: "Suni direct", text: "Un singur click. Fără intermediari, fără comision." },
];

// Model fix de patrate (fara random, ca sa nu apara erori de hidratare)
const patrate = [
  "border border-slate-300", "bg-slate-300/60", "border border-slate-300", "bg-orange-first animate-pulse",
  "bg-slate-300/60", "bg-blue-first", "border border-slate-300", "bg-slate-300/60",
  "border border-slate-300", "border border-slate-300", "bg-yellow-first animate-pulse", "bg-slate-300/60",
];

const label = "text-[10px] font-sans tracking-widest text-slate-400 uppercase";
const titlu = "font-bold tracking-tight uppercase font-heading leading-[1.08] text-[#0F172A]";
const frame = "relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80";

export default function Home() {
  return (
    <div className="relative w-full min-w-[375px] bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO */}
      <section id="hero" className="pt-10 sm:pt-16">
        <div className={frame}>
          <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80">
            {/* Stanga: patratul portocaliu */}
            <div className="hidden md:block md:col-span-2 border-r border-slate-200/80 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-first text-white text-[10px] font-bold font-sans py-6 px-1.5 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest">
                Meșteri locali
              </div>
            </div>

            {/* Centru: totul pe mijloc */}
            <div className="col-span-12 md:col-span-8 p-8 sm:p-16 md:border-r border-slate-200/80 col-center text-center min-h-[340px] sm:min-h-[420px]">
              <h1 className={`${titlu} text-3xl sm:text-5xl md:text-6xl max-w-3xl`}>
                Găsește-ți meșterul potrivit în doar 10 secunde.
              </h1>
              <p className="mt-8 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed tracking-tight max-w-xl">
                Țevi, electricitate, zugrăveli. Alegi categoria, vezi lucrările și suni direct.
                Fără intermediari, fără comisioane, din orașul tău.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <OrangeButon link="/mesteri" continut="Vezi meșterii" />
                <WhiteButon link="/servicii" continut="Servicii" />
              </div>
            </div>

            {/* Dreapta: eticheta + cateva patrate */}
            <div className="hidden md:flex md:col-span-2 p-4 flex-col justify-between">
              <span className={label}>Gratuit la start</span>
              <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
                {patrate.map((c, i) => (
                  <div
                    key={i}
                    className={`aspect-square ${c}`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORII */}
      <section className="mt-16 sm:mt-24">
        <div className={frame}>
          <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80">
            <div className="md:col-span-4 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-slate-200/80">
              <span className={label}>Categorii</span>
              <h2 className={`${titlu} mt-4 text-3xl sm:text-4xl`}>Ce ai de rezolvat?</h2>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2">
              {categorii.map((c, i) => (
                <Link
                  key={c.nr}
                  href={`/mesteri?categorie=${c.cheie}#lista`}
                  className={`group p-8 sm:p-10 border-slate-200/80 transition-colors hover:bg-blue-first ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  } ${i < 2 ? "border-b" : i === 2 ? "border-b sm:border-b-0" : ""}`}
                >
                  <span className="font-sans text-xs tracking-widest text-[#EA580C]">{c.nr}</span>
                  <h3 className="mt-3 text-lg font-bold uppercase tracking-wide font-heading text-[#0F172A] group-hover:text-white transition-colors">
                    {c.nume}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 transition-colors">
                    {c.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PASI */}
      <section className="mt-16 sm:mt-24 pb-16 sm:pb-24">
        <div className={frame}>
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-slate-200/80">
            {pasi.map((p, i) => (
              <div
                key={p.nr}
                className={`p-8 sm:p-12 border-slate-200/80 ${
                  i < pasi.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                }`}
              >
                <div className="text-5xl sm:text-6xl font-bold font-heading text-[#F59E0B]">
                  {p.nr}
                </div>
                <h3 className="mt-6 text-lg font-bold uppercase tracking-wide font-heading text-[#0F172A]">
                  {p.titlu}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}