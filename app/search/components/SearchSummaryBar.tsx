"use client";

import { useState } from "react";
import { IconDestination, IconCalendar, IconPerson } from "./Icons";

export function SearchSummaryBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border-b border-slate-200 shadow-sm flex flex-col items-start pb-4 pt-4 px-4 sm:px-6 w-full z-20 sticky top-[65px]">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Mobile Default View (Collapsed) */}
        <div 
          className={`flex lg:hidden items-center justify-between w-full p-3 bg-[#ECEDF6] hover:bg-slate-200 transition-colors rounded-xl cursor-pointer ${isExpanded ? 'hidden' : 'flex'}`}
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-slate-900 text-sm">Bali, Indonesia</span>
            <span className="font-medium text-slate-500 text-[11px] sm:text-xs">Oct 12 - 19 • 2 Adults, 1 Room</span>
          </div>
          <span className="text-[#005CBD] font-bold text-sm bg-blue-50 px-3 py-1.5 rounded-lg">Edit</span>
        </div>

        {/* Desktop View & Mobile Expanded View */}
        <div className={`flex flex-col lg:flex-row gap-3 lg:gap-4 lg:items-center w-full ${isExpanded ? 'flex' : 'hidden lg:flex'}`}>
          <div className="flex justify-between items-center lg:hidden mb-2">
            <span className="font-bold text-lg text-slate-900">Edit Search</span>
            <button 
              className="bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center border-none cursor-pointer" 
              onClick={() => setIsExpanded(false)}
            >
               <span className="font-bold text-slate-500">✕</span>
            </button>
          </div>

          {/* Destination */}
          <div className="bg-[#ECEDF6] border border-slate-300 flex flex-1 items-center px-4 py-3 rounded-xl w-full">
            <div className="w-7 h-5 mr-2 shrink-0 flex items-center justify-center">
              <IconDestination />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-slate-500 text-xs">Destination</span>
              <span className="font-semibold text-slate-900 text-sm">Bali, Indonesia</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto shrink-0">
            {/* Dates */}
            <div className="bg-[#ECEDF6] border border-slate-300 flex flex-1 items-center px-4 py-3 rounded-xl w-full sm:w-auto">
              <div className="w-[30px] h-5 mr-2 shrink-0 flex items-center justify-center">
                <IconCalendar />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-slate-500 text-xs">Dates</span>
                <span className="font-semibold text-slate-900 text-sm whitespace-nowrap">Oct 12 - Oct 19, 2024</span>
              </div>
            </div>
            
            {/* Travelers */}
            <div className="bg-[#ECEDF6] border border-slate-300 flex flex-1 items-center px-4 py-3 rounded-xl w-full sm:w-auto">
              <div className="w-7 h-4 mr-2 shrink-0 flex items-center justify-center">
                <IconPerson />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-slate-500 text-xs">Travelers</span>
                <span className="font-semibold text-slate-900 text-sm whitespace-nowrap">2 Adults, 1 Room</span>
              </div>
            </div>
          </div>
          
          {/* Update Search button */}
          <button 
            className="bg-[#005CBD] hover:bg-blue-800 transition-colors flex items-center justify-center px-8 py-4 lg:py-3 rounded-xl shrink-0 cursor-pointer shadow-md w-full lg:w-auto mt-2 lg:mt-0 border-none"
            onClick={() => setIsExpanded(false)}
          >
            <span className="font-semibold lg:font-normal text-white text-base">Update Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
