import React from 'react';
import Image from 'next/image';
const DespreNoi = () => {
    return (
        <section className='col-center w-full min-w-[375px] min-h-[calc(100dvh-60px)] bg-slate-100 py-10 sm:py-16 relative overflow-hidden'>

            {/* -------------------------------------------------------------------------- */}
            {/* -------------------------------Prima sectiune----------------------------- */}
            <div className="w-full col-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-0" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none -z-0" />
                <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none -z-0" />
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80 mb-12 sm:mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80 relative  ">

                        <div className="hidden md:block md:col-span-2 border-r border-slate-200/80 p-4 relative">
                            <span className="text-[10px] font-sans tracking-widest text-slate-400 uppercase sticky top-24">
                                OBOSIT DE PIERDUT ZILE PENTRU CAUTAT?
                            </span>
                        </div>

                        <div className="col-span-12 md:col-span-8 p-8 sm:p-16 text-center border-r border-slate-200/80 col-center">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase font-heading leading-[1.08] text-[#0F172A] max-w-3xl">
                                SUNTEM CONSTRUCTORII CARE CREAZĂ PLATFORMA PE CARE NE-AM DORIT-O MEREU
                            </h1>
                            <p className="mt-8 text-xs sm:text-sm md:text-base text-slate-600 font-normal max-w-xl leading-relaxed tracking-tight">
                                Simplificăm procesul complicat și manual al căutării meșterilor verificați. Oferim mai mult timp pentru proiectare și execuție de calitate, eliminând munca inutilă.
                            </p>
                        </div>

                        <div className="hidden md:block md:col-span-2 p-4 relative">
                            <span className="text-[10px] font-sans tracking-widest text-slate-400 uppercase sticky top-24">
                                WE BUILT THE FIX
                            </span>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-first text-white text-[10px] font-bold font-sans py-6 px-1.5 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest">
                                STANDARDE PRO
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------- */}
            {/* -------------------------------A 2 sectiune----------------------------- */}
            <div className="w-full col-center mb-12 sm:mb-16">
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 border-x border-slate-200/80">

                    <div className="w-full border-t border-slate-500/80 mb-8 sm:mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-12 border-y border-slate-200/80 relative items-center">

                        <div className="col-span-12 md:col-span-6 p-6 sm:p-10 border-b md:border-b-0 md:border-r border-slate-200/80 flex-center">
                            <div className="relative w-full min-h-[400px] sm:min-h-[480px] rounded-lg overflow-hidden border border-slate-200/80 bg-white/80 backdrop-blur-md">
                                <Image
                                    src={'/Despre/GrupMesteriPhoto1.jpg'}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    alt='Despre noi'
                                    className="object-fit "
                                />
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 p-8 sm:p-12 relative flex flex-col justify-center">

                            <div className="hidden md:flex absolute right-4 sm:right-8 md:right-12 top-3 -translate-y-1/2 bg-orange-first text-white text-[6px] sm:text-[8px] md:text-[10px] font-bold font-sans py-2 sm:py-3 md:py-4 lg:py-6 px-1.5  uppercase tracking-widest">
                                STANDARDE PRO
                            </div>


                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase font-heading leading-[1.08] text-[#0F172A] mb-6 pr-6">
                                Despre noi
                            </h2>

                            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed tracking-tight pr-6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto neque est impedit consequuntur odit amet eaque enim fuga eius rerum debitis quia veritatis, numquam suscipit temporibus magni ex tenetur error, quis similique, minima soluta reiciendis. Officia alias tempore, ipsum, ipsam quo adipisci ducimus dolorem natus voluptas exercitationem expedita. Recusandae, quod.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------- */}
            {/* ----------------------Harta si cele 3 carduri----------------------------- */}
            <div className='relative z-10 w-[90%] max-w-[1200px] gap-8 md:gap-10 grid grid-cols-1 md:grid-cols-2 items-stretch my-auto'>
                <div className="map-card relative min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-blue-first border border-slate-200/80 shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52823.242480449946!2d28.160000625026832!3d45.90771685604771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65c95ca29ef7d%3A0x254c4e01d94d6250!2sCahul%2C%20Moldova!5e0!3m2!1sro!2sit!4v1786427709694!5m2!1sro!2sit"
                        width="100%"
                        height="100%"
                        className='w-full h-full min-h-[380px] sm:min-h-[420px] border-0 opacity-90 transition-opacity duration-300 hover:opacity-100'
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Google Maps - Cahul, Moldova"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-5 my-auto">

                    <div className="info-card group rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-6 text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-first" />
                            <h3 className="text-lg font-bold tracking-wide font-heading text-[#0F172A]">Adresă</h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-700 font-medium">Strada X, nr. 12</p>
                        <p className="text-xs text-slate-500 mt-0.5">Republica Moldova, Cahul</p>
                    </div>


                    <div className="info-card group rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-6 text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-first" />
                            <h3 className="text-lg font-bold tracking-wide font-heading text-[#0F172A]">Social Media &amp; Email</h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-700 font-medium">abcd@gmail.com</p>
                        <p className="text-xs text-slate-500 mt-0.5">Facebook • Instagram • LinkedIn</p>
                    </div>


                    <div className="info-card group rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-6 text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-first" />
                            <h3 className="text-lg font-bold tracking-wide font-heading text-[#0F172A]">Telefon &amp; Program</h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-700 font-medium">+373 123 456 789</p>
                        <p className="text-xs text-slate-500 mt-0.5">Luni - Duminică: 08:00 - 17:00</p>
                    </div>

                </div>
            </div>




        </section>

    );
};

export default DespreNoi;