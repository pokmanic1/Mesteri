import React from 'react';
import Image from 'next/image';

const Maestri = () => {
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

            <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[6px] sm:gap-3 md:gap-4 p-2 sm:p-6 md:p-10 relative z-10">
                {
                    arrMesteri.map(arrMesteriProfesie => (
                        arrMesteriProfesie.mesteri.map(mester => (
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
                                    </div>
                                </div>
                            </div>
                        ))
                    ))
                }
            </div>
        </section>
    );
};
const arrMesteri = [
    {
        slugProfesie: 'electric',
        mesteri: [
            {
                id: 1,
                slug: "ion-popescu-electrician",
                nume: "Ion Popescu",
                categorie: "Electrician",
                oras: "Chișinău",
                experienta: "10 ani",
                telefon: "+37369000000",
                disponibilitate: "Lun-Sâm: 08:00 - 20:00",
                pozaProfil: "/images/ion-popescu.jpg",
                descriere: "Specializat pe instalații electrice de la zero, schimbare tablouri și automatizări.",
                portofoliu: [
                    "/images/portofoliu/ion-1.jpg",
                    "/images/portofoliu/ion-2.jpg"
                ]
            },
            {
                id: 2,
                slug: "andrei-cojocaru-electrician",
                nume: "Andrei Cojocaru",
                categorie: "Electrician",
                oras: "Bălți",
                experienta: "6 ani",
                telefon: "+37368111222",
                disponibilitate: "Lun-Vin: 09:00 - 18:00",
                pozaProfil: "/images/andrei-cojocaru.jpg",
                descriere: "Montaj iluminat LED, diagnoză defecțiuni electrice și montaj prize/întrerupătoare.",
                portofoliu: [
                    "/images/portofoliu/andrei-1.jpg"
                ]
            },
            {
                id: 3,
                slug: "mihai-munteanu-electrician",
                nume: "Mihai Munteanu",
                categorie: "Electrician",
                oras: "Chișinău",
                experienta: "12 ani",
                telefon: "+37367222333",
                disponibilitate: "Non-stop (Urgente)",
                pozaProfil: "/images/mihai-munteanu.jpg",
                descriere: "Sisteme de împământare, trifazat, paratrăsnete și depanare rapidă.",
                portofoliu: [
                    "/images/portofoliu/mihai-1.jpg",
                    "/images/portofoliu/mihai-2.jpg"
                ]
            }
        ]
    },
    {
        slugProfesie: 'inginer',
        mesteri: [
            {
                id: 4,
                slug: "marian-rotaru-inginer",
                nume: "Marian Rotaru",
                categorie: "Inginer Constructor",
                oras: "Chișinău",
                experienta: "12 ani",
                telefon: "+37367333444",
                disponibilitate: "Lun-Vin: 08:00 - 17:00",
                pozaProfil: "/images/marian-rotaru.jpg",
                descriere: "Consultanță tehnică, proiectare structuri de rezistență și diriginte de șantier.",
                portofoliu: [
                    "/images/portofoliu/marian-1.jpg",
                    "/images/portofoliu/marian-2.jpg"
                ]
            },
            {
                id: 5,
                slug: "elena-rusu-inginer",
                nume: "Elena Rusu",
                categorie: "Inginer Proiectant",
                oras: "Chișinău",
                experienta: "8 ani",
                telefon: "+37369444555",
                disponibilitate: "Lun-Vin: 09:00 - 18:00",
                pozaProfil: "/images/elena-rusu.jpg",
                descriere: "Proiectare rețele termice și sanitare, avizare proiecte și expertiză tehnică.",
                portofoliu: [
                    "/images/portofoliu/elena-1.jpg"
                ]
            },
            {
                id: 6,
                slug: "sergiu-ceban-inginer",
                nume: "Sergiu Ceban",
                categorie: "Inginer Geodez",
                oras: "Ungheni",
                experienta: "15 ani",
                telefon: "+37360555666",
                disponibilitate: "Lun-Sâm: 08:00 - 17:00",
                pozaProfil: "/images/sergiu-ceban.jpg",
                descriere: "Măsurători topografice, cadastru, trasare axe clădiri și delimitare terenuri.",
                portofoliu: [
                    "/images/portofoliu/sergiu-1.jpg",
                    "/images/portofoliu/sergiu-2.jpg"
                ]
            },
            {
                id: 7,
                slug: "alexandru-moraru-inginer",
                nume: "Alexandru Moraru",
                categorie: "Inginer Instalații",
                oras: "Bălți",
                experienta: "9 ani",
                telefon: "+37368666777",
                disponibilitate: "Lun-Vin: 08:30 - 17:30",
                pozaProfil: "/images/alexandru-moraru.jpg",
                descriere: "Audit energetic, proiectare sisteme de ventilație și climatizare industrială.",
                portofoliu: [
                    "/images/portofoliu/alex-1.jpg"
                ]
            }
        ]
    },
    {
        slugProfesie: 'instalator',
        mesteri: [
            {
                id: 8,
                slug: "vlad-ceban-instalator",
                nume: "Vlad Ceban",
                categorie: "Instalator Sanitar",
                oras: "Chișinău",
                experienta: "8 ani",
                telefon: "+37369555666",
                disponibilitate: "Lun-Sâm: 08:00 - 19:00",
                pozaProfil: "/images/vlad-ceban.jpg",
                descriere: "Montaj încălzire în pardoseală, centrale termice, obiecte sanitare și canalizare.",
                portofoliu: [
                    "/images/portofoliu/vlad-1.jpg",
                    "/images/portofoliu/vlad-2.jpg"
                ]
            },
            {
                id: 9,
                slug: "dumitru-sirbu-instalator",
                nume: "Dumitru Sîrbu",
                categorie: "Instalator Sanitar",
                oras: "Cahul",
                experienta: "5 ani",
                telefon: "+37360777888",
                disponibilitate: "Lun-Sâm: 08:00 - 19:00",
                pozaProfil: "/images/dumitru-sirbu.jpg",
                descriere: "Reparații urgente, înlocuire țevi vechi și montaj boilere/robinete.",
                portofoliu: [
                    "/images/portofoliu/dumitru-1.jpg"
                ]
            },
            {
                id: 10,
                slug: "pavel-gutu-instalator",
                nume: "Pavel Guțu",
                categorie: "Instalator Termic",
                oras: "Orhei",
                experienta: "11 ani",
                telefon: "+37362888999",
                disponibilitate: "Lun-Vin: 08:00 - 18:00",
                pozaProfil: "/images/pavel-gutu.jpg",
                descriere: "Montaj pompe de căldură, sisteme solare termice și automatizări încălzire.",
                portofoliu: [
                    "/images/portofoliu/pavel-1.jpg",
                    "/images/portofoliu/pavel-2.jpg"
                ]
            }
        ]
    },
    {
        slugProfesie: 'zugrav',
        mesteri: [
            {
                id: 11,
                slug: "victor-lungu-zugrav",
                nume: "Victor Lungu",
                categorie: "Zugrav / Finisaje",
                oras: "Orhei",
                experienta: "7 ani",
                telefon: "+37362999000",
                disponibilitate: "Lun-Sâm: 08:00 - 18:00",
                pozaProfil: "/images/victor-lungu.jpg",
                descriere: "Tencuieli decorative, gletuire, vopsire lavabilă și montaj rigips.",
                portofoliu: [
                    "/images/portofoliu/victor-1.jpg",
                    "/images/portofoliu/victor-2.jpg"
                ]
            },
            {
                id: 12,
                slug: "nicolae-chiriac-zugrav",
                nume: "Nicolae Chiriac",
                categorie: "Zugrav / Decorator",
                oras: "Chișinău",
                experienta: "14 ani",
                telefon: "+37369111333",
                disponibilitate: "Lun-Sâm: 07:30 - 19:00",
                pozaProfil: "/images/nicolae-chiriac.jpg",
                descriere: "Vopsele decorative speciale (Stucco Veneziano, San Marco), zugrăveli de lux.",
                portofoliu: [
                    "/images/portofoliu/nicolae-1.jpg",
                    "/images/portofoliu/nicolae-2.jpg"
                ]
            },
            {
                id: 13,
                slug: "vadim-turcan-zugrav",
                nume: "Vadim Țurcan",
                categorie: "Zugrav / Tapetar",
                oras: "Bălți",
                experienta: "6 ani",
                telefon: "+37368222444",
                disponibilitate: "Lun-Sâm: 08:00 - 17:00",
                pozaProfil: "/images/vadim-turcan.jpg",
                descriere: "Montaj tapet fototapet, pregătire pereți, zugrăveli rapide spații comerciale.",
                portofoliu: [
                    "/images/portofoliu/vadim-1.jpg"
                ]
            },
            {
                id: 14,
                slug: "grigore-vicol-zugrav",
                nume: "Grigore Vicol",
                categorie: "Zugrav / Finisaje",
                oras: "Soroca",
                experienta: "10 ani",
                telefon: "+37367444666",
                disponibilitate: "Lun-Vin: 08:00 - 18:00",
                pozaProfil: "/images/grigore-vicol.jpg",
                descriere: "Montaj gips-carton, tavane suspendate, zugrăveli mecanizate cu pompă airless.",
                portofoliu: [
                    "/images/portofoliu/grigore-1.jpg"
                ]
            }
        ]
    }
];

export default Maestri;