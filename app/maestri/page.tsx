import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OrangeButon } from '@/components/Buton';
import { arrMesteri } from '@/utility/constants';
const Mesteri = () => {
  return (
    <section className='w-full min-h-[calc(100dvh-60px)] bg-slate-100 py-6 sm:py-10 relative overflow-hidden'>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-0" />




      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/35 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/25 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[100px] pointer-events-none -z-0" />




      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-6 pb-6 sm:pt-10 sm:pb-10 text-center">

        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
        </div>




        <h1 className="w-full text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 font-[var(--font-montserrat)] leading-tight sm:leading-none">
          Standardul Calității în <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-slate-900 via-gray-700 to-gray-500 bg-clip-text text-transparent font-bold">
            Construcții &amp; Finisaje.
          </span>
        </h1>

        <p className="mt-5 sm:mt-7 text-xs sm:text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed tracking-tight">
          Conectăm proiectele tale cu meșteri verificați, specializați pe domenii exacte. De la renovări complexe până la lucrări de finisaj de înaltă precizie.
        </p>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-400" />
          <div className="flex items-center gap-2 px-1">
            <div className="w-5 sm:w-7 h-[2px] rounded-full bg-gradient-to-r from-gray-300 to-gray-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)] ring-2 ring-white/80" />
            <div className="w-5 sm:w-7 h-[2px] rounded-full bg-gradient-to-l from-gray-300 to-gray-500" />
          </div>
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-gray-400" />
        </div>
      </div>

      <div className='w-full px-2 sm:px-6 md:px-10'>
        <div className="w-48 xs:w-56 sm:w-64 my-2 sm:my-4 relative group">
          <details className="relative">

            <summary className="list-none flex items-center justify-between w-full px-3 sm:px-4 py-1.5 sm:py-2.5 text-[11px] sm:text-xs font-semibold bg-[#0F172A] text-[#F8FAFC] rounded-full border sm:border-2 border-[#EA580C] shadow-sm cursor-pointer select-none focus:outline-none focus:ring-1 focus:ring-[#F59E0B] transition-all active:scale-[0.98]">
              <span className="truncate pr-1.5">Toate Categoriile</span>
              <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EA580C] text-white shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>

            <div className="absolute top-full left-0 w-full mt-1 p-1 sm:p-1.5 bg-[#0F172A] border sm:border-2 border-[#EA580C]/40 rounded-xl sm:rounded-2xl shadow-lg z-50 backdrop-blur-md overflow-hidden flex flex-col gap-0.5">
              <button type="button" className="w-full text-left px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-white hover:bg-[#EA580C] active:bg-[#EA580C] rounded-lg transition-colors truncate">
                Toate Categoriile
              </button>
              <button type="button" className="w-full text-left px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-slate-200 hover:bg-[#EA580C] active:bg-[#EA580C] rounded-lg transition-colors truncate">
                Electricieni
              </button>
              <button type="button" className="w-full text-left px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-slate-200 hover:bg-[#EA580C] active:bg-[#EA580C] rounded-lg transition-colors truncate">
                Ingineri
              </button>
              <button type="button" className="w-full text-left px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-slate-200 hover:bg-[#EA580C] active:bg-[#EA580C] rounded-lg transition-colors truncate">
                Instalatori
              </button>
              <button type="button" className="w-full text-left px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-slate-200 hover:bg-[#EA580C] active:bg-[#EA580C] rounded-lg transition-colors truncate">
                Zugravi / Finisaje
              </button>
            </div>

          </details>
        </div>
      </div>


      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[6px] sm:gap-3 md:gap-4 p-2 sm:p-6 md:p-10 relative z-10">
        {
          arrMesteri.map(mester => (
            <div key={mester.id} className="border border-gray-800 bg-blue-first hover:shadow-lg transition-shadow duration-200 h-[210px] sm:h-[300px] md:h-[360px] lg:h-[400px] p-1 ">
              <div className='relative w-full h-full overflow-hidden'>
                <Image
                  src={"/Rectangle 11.png"}
                  alt={mester.nume}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover"
                />

                <div className='absolute bottom-0 left-0 right-0 h-[60%] sm:h-[45%] bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end p-1.5 sm:p-3 text-white'>
                  <h2 className='text-[10px] xs:text-xs sm:text-base font-medium leading-tight drop-shadow-md truncate'>
                    Nume: <span className="font-normal">{mester.nume}</span>
                  </h2>
                  <p className='text-[9px] xs:text-[10px] sm:text-xs font-light text-gray-200 mt-0.5 drop-shadow-md truncate'>
                    Profesia: <span className="font-normal">{mester.categorie}</span>
                  </p>
                  <p className='text-[9px] xs:text-[10px] sm:text-xs font-light text-gray-200 drop-shadow-md truncate'>
                    Oras: <span className="font-normal">{mester.oras}</span>
                  </p>
                  <p className='text-[9px] xs:text-[10px] sm:text-xs font-light text-gray-200 drop-shadow-md truncate'>
                    Exp: <span className="font-normal">{mester.experienta}</span>
                  </p>
                  <Link href={`/maestri/${mester.slug}`} className='bg-orange-first text-[10px] sm:text-xs px-3 py-0.5 rounded text-white inline-block mt-1 self-start transition-transform duration-200 hover:scale-105 hover:opacity-80'>Descopera</Link>



                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};


export default Mesteri;