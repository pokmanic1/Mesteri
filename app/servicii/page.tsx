import Link from "next/link";
import { OrangeButon, WhiteButon } from "@/components/Buton";
import { arrMesteri } from "@/utility/constants";

const label = "text-[10px] font-mono tracking-widest text-slate-400 uppercase";
const titlu =
  "font-extrabold tracking-tight uppercase font-[var(--font-montserrat)] leading-[1.08] text-[#0F172A]";
const frame = "relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80";

const servicii = [
  {
    nr: "01",
    cheie: "electric",
    nume: "Electricieni",
    buton: "Vezi electricienii",
    lista: [
      "Instalații electrice de la zero",
      "Schimbare tablouri electrice",
      "Prize și întrerupătoare",
      "Iluminat LED",
      "Depanare defecțiuni",
      "Împământare și trifazat",
    ],
  },
  {
    nr: "02",
    cheie: "instalator",
    nume: "Instalatori",
    buton: "Vezi instalatorii",
    lista: [
      "Încălzire în pardoseală",
      "Centrale termice",
      "Boilere și robinete",
      "Canalizare",
      "Înlocuire țevi vechi",
      "Pompe de căldură",
    ],
  },
  {
    nr: "03",
    cheie: "zugrav",
    nume: "Zugravi",
    buton: "Vezi zugravii",
    lista: [
      "Zugrăveli și gletuire",
      "Vopsire lavabilă",
      "Tencuieli decorative",
      "Montaj gips-carton",
      "Tavane suspendate",
      "Tapet și fototapet",
    ],
  },
  {
    nr: "04",
    cheie: "inginer",
    nume: "Ingineri",
    buton: "Vezi inginerii",
    lista: [
      "Proiectare structuri",
      "Consultanță tehnică",
      "Diriginte de șantier",
      "Topografie și cadastru",
      "Audit energetic",
      "Ventilație și climatizare",
    ],
  },
];

// Model fix de patrate (fara random, ca sa nu apara erori de hidratare)
const patrate = [
  "border border-slate-300", "bg-slate-300/60", "border border-slate-300", "bg-[#EA580C] animate-pulse",
  "bg-slate-300/60", "bg-[#0F172A]", "border border-slate-300", "bg-slate-300/60",
  "border border-slate-300", "border border-slate-300", "bg-[#F59E0B] animate-pulse", "bg-slate-300/60",
];

export default function Servicii() {
  return (
    <div className="relative w-full min-w-[375px] bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* TITLU */}
      <section className="pt-10 sm:pt-16">
        <div className={frame}>
          <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80">
            {/* Stanga: patratul portocaliu */}
            <div className="hidden md:block md:col-span-2 border-r border-slate-200/80 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#EA580C] text-white text-[10px] font-bold font-mono py-6 px-1.5 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest">
                Fără comision
              </div>
            </div>

            {/* Centru: totul pe mijloc */}
            <div className="col-span-12 md:col-span-8 p-8 sm:p-16 md:border-r border-slate-200/80 flex flex-col items-center justify-center text-center min-h-[340px] sm:min-h-[420px]">
              <span className={label}>Servicii</span>
              <h1 className={`${titlu} mt-5 text-3xl sm:text-5xl md:text-6xl max-w-3xl`}>
                Ce ai de rezolvat?
              </h1>
              <p className="mt-6 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed tracking-tight max-w-xl">
                Alege lucrarea de care ai nevoie și vezi meșterii care o fac. Îi suni direct,
                fără intermediari și fără comision. Fiecare profil arată orașul, experiența
                și lucrările meșterului, ca să știi cu cine vorbești înainte să suni.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <OrangeButon link="/mesteri" continut="Vezi toți meșterii" />
                <WhiteButon link="#categorii" continut="Vezi lucrările" />
              </div>
            </div>

            {/* Dreapta: eticheta + cateva patrate */}
            <div className="hidden md:flex md:col-span-2 p-4 flex-col justify-between">
              <span className={label}>Apel direct</span>
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

      {/* CATEGORII CU LUCRARI */}
      <section id="categorii" className="mt-16 sm:mt-24 pb-16 sm:pb-24 scroll-mt-20">
        <div className={frame}>
          <div className="border-y border-slate-200/80">
            {servicii.map((s, i) => {
              const nr = arrMesteri.filter((m) => m.categorieGenerala === s.cheie).length;
              return (
                <Link
                  key={s.cheie}
                  href="/mesteri"
                  className={`group grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-[#0F172A] ${
                    i < servicii.length - 1 ? "border-b border-slate-200/80" : ""
                  }`}
                >
                  <div className="md:col-span-4 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-slate-200/80 group-hover:border-white/10 transition-colors">
                    <span className="font-mono text-xs tracking-widest text-[#EA580C]">
                      {s.nr}
                    </span>
                    <h2
                      className={`${titlu} mt-3 text-2xl sm:text-3xl group-hover:text-white transition-colors`}
                    >
                      {s.nume}
                    </h2>
                    <p className={`${label} mt-3`}>
                      {nr} {nr === 1 ? "meșter" : "meșteri"}
                    </p>
                    <span className="mt-6 inline-block bg-[#EA580C] text-white text-xs sm:text-sm px-5 py-2 rounded transition-transform duration-200 group-hover:translate-x-1">
                      {s.buton} →
                    </span>
                  </div>

                  <ul className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-8 sm:p-12 content-center">
                    {s.lista.map((l) => (
                      <li
                        key={l}
                        className="flex items-center gap-3 text-sm sm:text-base text-slate-700 group-hover:text-slate-200 transition-colors"
                      >
                        <span className="w-2 h-2 shrink-0 bg-[#F59E0B]" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}