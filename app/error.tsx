'use client'; // Next.js cere ca error.tsx sa fie client component

// app/error.tsx
// Apare cand ceva se strica in timp ce se afiseaza o pagina.
// "retry" incearca sa incarce pagina din nou, fara refresh complet.

import { useEffect } from "react";
import { WhiteButon } from "@/components/Buton";

const label = "text-[10px] font-mono tracking-widest text-slate-400 uppercase";
const titlu = "font-extrabold tracking-tight uppercase font-[var(--font-montserrat)] leading-[1.08] text-[#0F172A]";
const frame = "relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80";

type Props = {
    error: Error & { digest?: string };
    retry: () => void;
};

export default function ErrorPage({ error, retry }: Props) {
    // Scriem eroarea in consola, ca s-o vezi cand testezi
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="relative w-full min-w-[375px] min-h-[calc(100dvh-60px)] bg-slate-100 overflow-hidden pt-10 sm:pt-16 pb-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#EA580C]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className={frame}>
                <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80">
                    <div className="hidden md:block md:col-span-2 border-r border-slate-200/80 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0F172A] text-white text-[10px] font-bold font-mono py-6 px-1.5 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest">
                            Eroare
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-8 p-8 sm:p-16 md:border-r border-slate-200/80 flex flex-col items-center justify-center text-center min-h-[380px] sm:min-h-[460px]">
                        {/* Semnul de atentie, in culorile site-ului */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EA580C] text-white flex items-center justify-center text-3xl sm:text-4xl font-extrabold font-[var(--font-montserrat)]" aria-hidden="true">
                            !
                        </div>
                        <h1 className={`${titlu} mt-8 text-2xl sm:text-4xl md:text-5xl max-w-2xl`}>
                            Pagina nu s-a încărcat
                        </h1>
                        <p className="mt-6 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed tracking-tight max-w-md">
                            A apărut o problemă la afișarea paginii. Încearcă din nou. Dacă se repetă,
                            deschide lista de meșteri.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            {/* Buton normal (nu link), pentru ca apeleaza retry() */}
                            <button
                                type="button"
                                onClick={() => retry()}
                                className="inline-block bg-[#EA580C] hover:bg-[#bf4605] text-[12px] sm:text-[14px] md:text-[16px] text-white font-serif px-4 sm:px-5 md:px-6 lg:px-7 py-1 rounded border border-blue-400/30 transition-colors cursor-pointer"
                            >
                                Încearcă din nou
                            </button>
                            <WhiteButon link="/mesteri" continut="Vezi meșterii" />
                        </div>
                    </div>

                    <div className="hidden md:flex md:col-span-2 p-4 flex-col justify-between">
                        <span className={label}>Ceva n-a mers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}