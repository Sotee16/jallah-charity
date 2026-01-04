import React from 'react';
import logo from '../assets/gallery/help2.jpg';

const DonateCard = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-4xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Left: Image Section */}
      <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img 
          src={logo}
          alt="Children in classroom"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content Section */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        
        {/* Top Content */}
        <div>
          <header className="flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
            Education | Liberia
          </header>
          
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight mb-2 hover:text-blue-700 cursor-pointer">
            Empower the Future: Educate Liberian Children
          </h3>
          
          <p className="text-sm text-blue-600 font-medium mb-3">
            by Rescue Liberia for Better Life
          </p>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            Poverty is a major barrier to education in Liberia. The 2021 GEMR found that Liberia had a net enrollment rate of 44% for primary school chi...
            <span className="text-blue-600 font-semibold cursor-pointer ml-1 hover:underline">read more</span>
          </p>
        </div>

        {/* Bottom Actions & Progress */}
        <div className="mt-6">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-[#84A02B] font-bold text-xl">$12,717</span>
            <span className="text-gray-500 text-sm">raised of $36,000 goal</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
            <div 
              className="bg-[#A3C639] h-2 rounded-full" 
              style={{ width: '35%' }}
            ></div>
          </div>

          {/* Input and Donate Button */}
          <div className="flex items-center gap-0">
            <div className="relative flex-grow max-w-[120px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                $
              </div>
              <input 
                type="number" 
                className="w-full border border-gray-300 py-2 pl-7 pr-3 focus:ring-1 focus:ring-orange-500 outline-none text-sm"
                placeholder="0"
              />
            </div>
            <button className="bg-[#F58220] hover:bg-[#e67610] text-white font-bold px-8 py-2 uppercase text-sm tracking-wide transition-colors">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
