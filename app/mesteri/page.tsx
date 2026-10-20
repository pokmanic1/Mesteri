'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { OrangeButon } from '@/components/Buton';
import { arrMesteri } from '@/utility/constants';
import FilterCategorii from '@/components/mesteriComponents/FilterCategorii';

const label = "text-[10px] font-mono tracking-widest text-slate-400 uppercase";
const titlu =
  "font-extrabold tracking-tight uppercase font-[var(--font-montserrat)] leading-[1.08] text-[#0F172A]";
const frame = "relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80";

const patrate = [
  "border border-slate-300", "bg-slate-300/60", "border border-slate-300", "bg-[#EA580C] animate-pulse",
  "bg-slate-300/60", "bg-[#0F172A]", "border border-slate-300", "bg-slate-300/60",
  "border border-slate-300", "border border-slate-300", "bg-[#F59E0B] animate-pulse", "bg-slate-300/60",
];

const Mesteri = () => {


  const searchParams = useSearchParams();
  console.log("searchParams")
  console.log("searchParams")
  console.log("searchParams")
  console.log(searchParams)
  const [categorie, setCategorie] = useState(searchParams.get('categorie') || 'toate');

  const arrFiltrat =
    categorie === 'toate'
      ? arrMesteri
      : arrMesteri.filter((mester) => mester.categorieGenerala === categorie);

  return (
    <section className='w-full min-h-[calc(100dvh-60px)] bg-slate-100 py-6 sm:py-10 relative overflow-hidden'>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-0" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/35 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/25 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className={frame}>
        <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80">
          <div className="hidden md:block md:col-span-2 border-r border-slate-200/80 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#EA580C] text-white text-[10px] font-bold font-mono py-6 px-1.5 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest">
              Apel direct
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 p-8 sm:p-14 md:border-r border-slate-200/80 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[380px]">
            <span className={label}>Meșteri</span>
            <h1 className={`${titlu} mt-5 text-3xl sm:text-5xl md:text-6xl max-w-3xl`}>
              Găsește meșterul potrivit
            </h1>
            <p className="mt-6 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed tracking-tight max-w-xl">
              Alege categoria, vezi meșterii din orașul tău și sună-i direct. Fără intermediari
              și fără comision.
            </p>
            <div className="mt-8">
              <OrangeButon link="#lista" continut="Vezi meșterii" />
            </div>
          </div>

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

      <FilterCategorii categorie={categorie} onChange={setCategorie} />

      <div id="lista" className="w-full scroll-mt-20 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[6px] sm:gap-3 md:gap-4 p-2 sm:p-6 md:p-10 relative z-10">
        {arrFiltrat.length === 0 && (
          <p className="col-span-full text-center text-sm text-slate-500 py-10">
            Nu avem încă meșteri în această categorie.
          </p>
        )}

        {arrFiltrat.map((mester) => (
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
                <Link href={`/mesteri/${mester.slug}`} className='bg-orange-first text-[10px] sm:text-xs px-3 py-0.5 rounded text-white inline-block mt-1 self-start transition-transform duration-200 hover:scale-105 hover:opacity-80'>Descopera</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mesteri;