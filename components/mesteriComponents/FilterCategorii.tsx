'use client';
import { useState } from 'react';
import { arrMesteri } from '@/utility/constants';
const FilterCategorii = (props:any) => {
  const [categorie, setCategorie] = useState('Toate Categoriile');
  const [inputDeschis, setInuputDeschis] = useState(false);

  const arrMesteriFiltrat=arrMesteri.filter(mester=>mester.categorie===categorie)

  const handleCategorie = (categorie1: any) => {
    setCategorie(categorie1);
    setInuputDeschis(false); 
    console.log("categoriea actuala", categorie1);
  };

  const categorii = [
    'Toate Categoriile',
    'Electricieni',
    'Ingineri',
    'Instalatori',
    'Zugravi / Finisaje',
  ];

  return (
    <div className="w-full px-2 sm:px-6 md:px-10">
      <div className="w-48 xs:w-56 sm:w-64 my-2 sm:my-4 relative group">
        <div className="relative">

          <button   
            type="button"
            onClick={() => setInuputDeschis((p) => !p)} 
            className="list-none flex items-center justify-between w-full px-3 sm:px-4 py-1.5 sm:py-2.5 text-[11px] sm:text-xs font-semibold bg-[#0F172A] text-[#F8FAFC] rounded-full border sm:border-2 border-[#EA580C] shadow-sm cursor-pointer select-none focus:outline-none focus:ring-1 focus:ring-[#F59E0B] transition-all duration-300 hover:border-[#F59E0B] hover:shadow-md hover:shadow-[#EA580C]/20 active:scale-[0.98]"
          >
            <span className="truncate pr-1.5 transition-colors duration-200">{categorie}</span>
            
            <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EA580C] text-white shrink-0 transition-transform duration-300 group-hover:scale-110">
              <svg 
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 ease-in-out ${inputDeschis ? 'rotate-0' : 'rotate-90'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div className={`absolute top-full left-0 w-full z-50 grid transition-[grid-template-rows] duration-300 ease-out ${inputDeschis ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className={`mt-1 p-1 sm:p-1.5 bg-[#0F172A] border sm:border-2 border-[#EA580C]/40 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-md flex flex-col gap-0.5 transition-all duration-300 ${inputDeschis ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
                {categorii.map((categorie) => (
                  <button
                    key={categorie}
                    type="button"
                    onClick={() => handleCategorie(categorie)}
                    className="w-full text-left px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-slate-200 hover:bg-[#EA580C] hover:text-white hover:translate-x-1 active:scale-[0.98] rounded-lg transition-all duration-200 ease-in-out truncate"
                  >
                    {categorie}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterCategorii;