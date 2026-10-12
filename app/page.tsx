import Image from "next/image";
import { OrangeButon, WhiteButon } from "@/components/Buton";
export default function Home() {
  return (
    <section
      id='hero'
      className="relative flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 sm:p-10 md:p-14 w-full min-w-[375px] h-dvh bg-cover bg-center drop-shadow-xl overflow-hidden"
      style={{ backgroundImage: "url('/Hero/HeroBg.png')" }}
    >
      <div className="max-w-2xl flex flex-col items-center md:items-start gap-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white ">
          Găsește-ți meșterul potrivit în doar 10 secunde.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-xl">
          Un singur click, un singur apel. Fără intermediari, fără comisioane, direct de la tine din oraș.
        </p>

        <div className="flex justify-center items-center gap-4 w-full  mt-2 text-white md:px-10">

          <OrangeButon link="/contact" continut="Contactează-ne" />
          <WhiteButon link="/contact" continut="Contactează-ne" />


        </div>



      </div>
    </section>
  );
}