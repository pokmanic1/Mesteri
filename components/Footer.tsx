import Link from "next/link";

// Completeaza cu numarul real, in format international, fara spatii (ex: "+37369123456").
// Cat timp e gol, butoanele de contact nu apar in footer.
const TELEFON = "";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-slate-300 min-w-[375px]">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
                <div>
                    <p className="font-[var(--font-montserrat)] font-bold uppercase text-white text-lg">
                        Meșteri
                    </p>
                    <p className="mt-3 text-sm text-slate-400 max-w-xs">
                        Găsește un meșter din orașul tău și sună-l direct. Fără comision.
                    </p>
                </div>

                <nav className="flex flex-col gap-2 text-sm">
                    <Link href="/mesteri" className="hover:text-white">Toți meșterii</Link>
                    <Link href="/servicii" className="hover:text-white">Servicii</Link>
                    <Link href="/despre" className="hover:text-white">Despre noi</Link>
                </nav>

                <div>
                    <p className="font-[var(--font-montserrat)] font-bold uppercase text-[#F59E0B] text-sm">
                        Ești meșter?
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                        Te adăugăm gratuit. Trimite-ne câteva poze cu lucrările tale.
                    </p>

                    {TELEFON && (
                        <>
                            <a
                                href={`viber://chat?number=${encodeURIComponent(TELEFON)}`}
                                className="mt-4 inline-block rounded bg-[#EA580C] px-5 py-2 text-sm text-white hover:bg-[#bf4605]"
                            >
                                Scrie-ne pe Viber
                            </a>
                            <a href={`tel:${TELEFON}`} className="mt-3 block text-sm hover:text-white">
                                {TELEFON}
                            </a>
                        </>
                    )}
                </div>
            </div>

            <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
                © 2026 Meșteri
            </div>
        </footer>
    );
}