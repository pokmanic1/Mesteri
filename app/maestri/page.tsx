import React from 'react';
import Image from 'next/image';
const Maestri = () => {
    return (
        <section className='w-full min-h-[calc(100dvh-60px)] bg-white-first py-6 sm:py-10'>
            <h1 className="w-full mt-2 sm:mt-5 md:mt-10 text-lg sm:text-2xl md:text-4xl font-bold text-center tracking-tight text-gray-900">
                Maetri
            </h1>

            <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[6px] sm:gap-3 md:gap-4 p-2 sm:p-6 md:p-10">
                {
                    arrMesteri.map(arrMesteriProfesie => (
                        arrMesteriProfesie.mesteri.map(mester => (
                            <div key={mester.id} className="border border-gray-800 bg-black/5 hover:shadow-lg transition-shadow duration-200 h-[210px] sm:h-[300px] md:h-[360px] lg:h-[400px] p-1 sm:p-2">
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