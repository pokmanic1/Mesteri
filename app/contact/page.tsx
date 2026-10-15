import React from 'react';

const Contact = () => {
    return (
        <section className='col-center w-full min-w-[375px] min-h-[calc(100dvh-60px)] bg-slate-50 py-10 sm:py-16 relative overflow-hidden'>
            
            {/* Grid Pattern Subtil de Fundal */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-0" />

            {/* Lumini Ambientale Difuze pe Paleta Oficială */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#F59E0B]/10 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none -z-0" />
            <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[120px] pointer-events-none -z-0" />
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

            {/* Header Arhitectural Minimalist */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center mb-8 sm:mb-12">
                
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                </div>

                <h1 className="w-full text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] font-[var(--font-montserrat)] leading-tight">
                    Suntem Aici să <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-[#0F172A] via-gray-700 to-gray-500 bg-clip-text text-transparent font-bold">
                        Ajutăm.
                    </span>
                </h1>

                <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-slate-600 font-normal max-w-xl mx-auto leading-relaxed tracking-tight">
                    Ai întrebări sau vrei să începi un proiect nou? Echipa noastră îți stă la dispoziție cu toate detaliile necesare.
                </p>

                {/* Separator Decorativ Premium */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-400" />
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-5 sm:w-7 h-[2px] rounded-full bg-gradient-to-r from-gray-300 to-gray-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)] ring-2 ring-white/80" />
                        <div className="w-5 sm:w-7 h-[2px] rounded-full bg-gradient-to-l from-gray-300 to-gray-500" />
                    </div>
                    <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-gray-400" />
                </div>
            </div>

            {/* Container Principal Hartă + Carduri Informații */}
            <div className='relative z-10 w-[90%] max-w-[1200px] gap-8 md:gap-10 grid grid-cols-1 md:grid-cols-2 items-stretch my-auto'>

                {/* Card Hartă Stilizat */}
                <div className="map-card relative min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-[#0F172A] border border-slate-200/80 shadow-xl transition-all duration-300 hover:shadow-2xl">
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

                {/* Coloană Carduri Informații */}
                <div className="grid grid-cols-1 gap-4 sm:gap-5 my-auto">

                    <div className="info-card group rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-6 text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#EA580C]" />
                            <h3 className="text-lg font-bold tracking-wide font-[var(--font-montserrat)] text-[#0F172A]">Adresă</h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-700 font-medium">Strada X, nr. 12</p>
                        <p className="text-xs text-slate-500 mt-0.5">Republica Moldova, Cahul</p>
                    </div>

                    <div className="info-card group rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-6 text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                            <h3 className="text-lg font-bold tracking-wide font-[var(--font-montserrat)] text-[#0F172A]">Social Media &amp; Email</h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-700 font-medium">abcd@gmail.com</p>
                        <p className="text-xs text-slate-500 mt-0.5">Facebook • Instagram • LinkedIn</p>
                    </div>

                    <div className="info-card group rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-6 text-[#0F172A] shadow-sm transition-all duration-300 hover:border-[#F59E0B]/50 hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0F172A]" />
                            <h3 className="text-lg font-bold tracking-wide font-[var(--font-montserrat)] text-[#0F172A]">Telefon &amp; Program</h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-700 font-medium">+373 123 456 789</p>
                        <p className="text-xs text-slate-500 mt-0.5">Luni - Duminică: 08:00 - 17:00</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;