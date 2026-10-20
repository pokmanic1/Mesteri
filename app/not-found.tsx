// app/not-found.tsx
// Apare cand cineva intra pe un link care nu exista (ex: /abc)
// sau cand o pagina apeleaza notFound().

import { OrangeButon, WhiteButon } from "@/components/Buton";

const label = "text-[10px] font-mono tracking-widest text-slate-400 uppercase";
const titlu = "font-extrabold tracking-tight uppercase font-[var(--font-montserrat)] leading-[1.08] text-[#0F172A]";
const frame = "relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80";

export default function NotFound() {
    return (
        <div className="relative w-full min-w-[375px] min-h-[calc(100dvh-60px)] bg-slate-100 overflow-hidden pt-10 sm:pt-16 pb-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className={frame}>
                <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80">
                    {/* Stanga: eticheta portocalie verticala, ca pe celelalte pagini */}
                    <div className="hidden md:block md:col-span-2 border-r border-slate-200/80 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#EA580C] text-white text-[10px] font-bold font-mono py-6 px-1.5 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest">
                            Pagină lipsă
                        </div>
                    </div>

                    {/* Centru */}
                    <div className="col-span-12 md:col-span-8 p-8 sm:p-16 md:border-r border-slate-200/80 flex flex-col items-center justify-center text-center min-h-[380px] sm:min-h-[460px]">
                        <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold font-[var(--font-montserrat)] text-[#F59E0B] leading-none">
                            404
                        </div>
                        <h1 className={`${titlu} mt-6 text-2xl sm:text-4xl md:text-5xl max-w-2xl`}>
                            Pagina nu există
                        </h1>
                        <p className="mt-6 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed tracking-tight max-w-md">
                            Linkul poate fi greșit sau meșterul nu mai este pe listă. Caută în catalog
                            sau întoarce-te pe pagina principală.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <OrangeButon link="/mesteri" continut="Vezi meșterii" />
                            <WhiteButon link="/" continut="Pagina principală" />
                        </div>
                    </div>

                    {/* Dreapta */}
                    <div className="hidden md:flex md:col-span-2 p-4 flex-col justify-between">
                        <span className={label}>Eroare 404</span>
                    </div>
                </div>
            </div>
        </div>
    );
}