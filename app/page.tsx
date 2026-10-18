import Link from "next/link";
import { OrangeButon, WhiteButon } from "@/components/Buton";
import { arrMesteri } from "@/utility/constants";

const categorii = [
  { nr: "01", nume: "Electricieni", text: "Prize, tablouri, iluminat, defecțiuni" },
  { nr: "02", nume: "Instalatori", text: "Țevi, centrale, boilere, canalizare" },
  { nr: "03", nume: "Zugravi", text: "Zugrăveli, gletuit, tapet, rigips" },
  { nr: "04", nume: "Ingineri", text: "Proiecte, consultanță, topografie" },
];

const pasi = [
  { nr: "01", titlu: "Alegi categoria", text: "Electrician, instalator, zugrav sau inginer." },
  { nr: "02", titlu: "Vezi meșterul", text: "Lucrări reale și ani de experiență, clar afișate." },
  { nr: "03", titlu: "Suni direct", text: "Un singur click. Fără intermediari, fără comision." },
];

const cifre = [
  { val: String(arrMesteri.length), label: "Meșteri" },
  { val: "4", label: "Categorii" },
  { val: "0 lei", label: "Comision" },
];

const label = "text-[10px] font-mono tracking-widest text-slate-400 uppercase";
const titlu = "font-extrabold tracking-tight uppercase font-[var(--font-montserrat)] leading-[1.08] text-[#0F172A]";
const frame = "relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80";

export default function Home() {
  return (
    <div className="relative w-full min-w-[375px] bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none" />

      <section id="hero" className="pt-10 sm:pt-16">
        <div className={frame}>
          <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80">
            <div className="hidden md:block md:col-span-2 border-r border-slate-200/80 p-4">
              <span className={label}>Meșteri locali</span>
            </div>

            <div className="col-span-12 md:col-span-8 p-8 sm:p-16 text-center border-r border-slate-200/80 flex flex-col items-center justify-center">
              <h1 className={`${titlu} text-3xl sm:text-5xl md:text-6xl max-w-3xl`}>
                Găsește-ți meșterul potrivit în doar 10 secunde.
              </h1>
              <p className="mt-8 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed tracking-tight max-w-xl">
                Țevi, electricitate, zugrăveli. Alegi categoria, vezi lucrările și suni direct.
                Fără intermediari, fără comisioane, din orașul tău.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <OrangeButon link="/maestri" continut="Vezi meșterii" />
                <WhiteButon link="/servicii" continut="Servicii" />
              </div>
            </div>

            <div className="hidden md:block md:col-span-2 p-4 relative">
              <span className={label}>Gratuit la start</span>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#EA580C] text-white text-[10px] font-bold font-mono py-6 px-1.5 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest">
                Apel direct
              </div>
            </div>
          </div>

         
        </div>
      </section>

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
                  href="/maestri"
                  className={`group p-8 sm:p-10 border-slate-200/80 transition-colors hover:bg-[#0F172A] ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  } ${i < 2 ? "border-b" : i === 2 ? "border-b sm:border-b-0" : ""}`}
                >
                  <span className="font-mono text-xs tracking-widest text-[#EA580C]">{c.nr}</span>
                  <h3 className="mt-3 text-lg font-bold uppercase tracking-wide font-[var(--font-montserrat)] text-[#0F172A] group-hover:text-white transition-colors">
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
      <section className="mt-16 sm:mt-24">
        <div className={frame}>
          <div className="border-t border-slate-500/80 mb-8 sm:mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-slate-200/80">
            {pasi.map((p, i) => (
              <div
                key={p.nr}
                className={`p-8 sm:p-12 border-slate-200/80 ${
                  i < pasi.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                }`}
              >
                <div className="text-5xl sm:text-6xl font-extrabold font-[var(--font-montserrat)] text-[#F59E0B]">
                  {p.nr}
                </div>
                <h3 className="mt-6 text-lg font-bold uppercase tracking-wide font-[var(--font-montserrat)] text-[#0F172A]">
                  {p.titlu}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="mt-16 sm:mt-24 pb-16 sm:pb-24">
        <div className={frame}>
          <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80 bg-[#0F172A]">
            <div className="md:col-span-8 p-8 sm:p-14">
              <span className="text-[10px] font-mono tracking-widest text-[#F59E0B] uppercase">Pentru meșteri</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight uppercase font-[var(--font-montserrat)] leading-[1.08] text-white">
                Ești meșter? Înscrie-te gratuit.
              </h2>
              <p className="mt-5 text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                Primii meșteri apar gratuit pe platformă și primesc apeluri direct de la clienți.
              </p>
            </div>
            <div className="md:col-span-4 p-8 sm:p-14 flex items-center md:justify-end border-t md:border-t-0 md:border-l border-white/10">
              <OrangeButon link="/contact" continut="Contactează-ne" />
            </div>
          </div>
        </div>
      </section> */}

        
    </div>
  );
}
