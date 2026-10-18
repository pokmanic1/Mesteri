import React from 'react'
import Image from 'next/image'
import { arrMesteri } from '@/utility/constants';

export async function generateStaticParams() {
    return arrMesteri.map((maestru) => ({
        id: maestru.id.toString(),
    }))
}

interface PageProps {
    params: Promise<{ id: string }>
}

const Maestru = async ({ params }: PageProps) => {
    const { id } = await params

    const maestru = arrMesteri.find((item) => item.id.toString() === id)

    if (!maestru) {
        return (
            <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center text-[#0F172A]">
                <h2 className="text-2xl font-extrabold font-[var(--font-montserrat)] uppercase">
                    Maestrul nu a fost găsit
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                    ID-ul solicitat nu există în sistem.
                </p>
            </div>
        )
    }

    return (
        <section className="col-center w-full min-w-[375px] min-h-[calc(100dvh-60px)] bg-slate-100 py-10 sm:py-16 relative overflow-hidden text-[#0F172A]">
            {/* Background Grids & Ambient Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-0" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none -z-0" />
            <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none -z-0" />
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80 mb-12 sm:mb-16">
                
                {/* Header Profile Section */}
                <div className="border-y border-slate-200/80 p-8 sm:p-14 text-center flex flex-col justify-center items-center bg-white/30 backdrop-blur-sm">
                    {/* Nume Maestru */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase font-[var(--font-montserrat)] leading-[1.08] text-[#0F172A] max-w-3xl">
                        {maestru.nume}
                    </h1>

                    {/* Profesia / Categoria (sub nume) */}
                    <span className="mt-3 inline-block text-sm sm:text-base font-bold font-mono text-[#EA580C] uppercase tracking-widest">
                        — {maestru.categorie} —
                    </span>

                    {/* Descriere */}
                    <p className="mt-6 text-xs sm:text-sm md:text-base text-slate-600 font-normal max-w-2xl leading-relaxed tracking-tight">
                        {maestru.descriere}
                    </p>
                </div>

                {/* Info Bar (Oraș, Experiență, Telefon) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200/80">
                    
                    <div className="p-6 border-b sm:border-b-0 sm:border-r border-slate-200/80 bg-white/50 backdrop-blur-md flex flex-col justify-center">
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">ORAȘ</span>
                        <p className="text-lg sm:text-xl font-bold font-[var(--font-montserrat)] text-[#0F172A] mt-1">
                            {maestru.oras}
                        </p>
                    </div>

                    <div className="p-6 border-b sm:border-b-0 sm:border-r border-slate-200/80 bg-white/50 backdrop-blur-md flex flex-col justify-center">
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">EXPERIENȚĂ</span>
                        <p className="text-lg sm:text-xl font-bold font-[var(--font-montserrat)] text-[#0F172A] mt-1">
                            {maestru.experienta}
                        </p>
                    </div>

                    <div className="p-6 bg-white/50 backdrop-blur-md flex flex-col justify-center">
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">TELEFON</span>
                        <a 
                            href={`tel:${maestru.telefon}`}
                            className="text-lg sm:text-xl font-bold font-[var(--font-montserrat)] text-[#EA580C] hover:underline mt-1"
                        >
                            {maestru.telefon}
                        </a>
                    </div>

                </div>
            </div>

            <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {maestru.portofoliu.map((item) => (
                        <div 
                            key={item}
                            className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200/80 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-md hover:-translate-y-1 flex items-center justify-center group">
                        
                            <div className="flex flex-col items-center gap-2 text-slate-400 group-hover:text-[#EA580C] transition-colors">
                                <svg className="w-8 h-8 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                                    Imagine lucrare
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Maestru