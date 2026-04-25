import {
  IconPerson,
  IconPersonSmall,
  IconRoomLink,
  IconCheck,
} from "./Icons";

export function RoomTable() {
  return (
    <div className="flex flex-col gap-8 pt-10 w-full">
      <p className="text-[#191c22] text-[16px] leading-6">Select Your Room</p>

      <div className="border border-[rgba(194,198,213,0.3)] overflow-hidden rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="bg-[#f2f3fc]">
              <th className="p-6 text-left w-[369px]">
                <span className="font-bold text-[#424753] text-[16px]">Room Type</span>
              </th>
              <th className="p-6 text-left w-[180px]">
                <span className="font-bold text-[#424753] text-[16px]">Sleeps</span>
              </th>
              <th className="p-6 text-left w-[238px]">
                <span className="font-bold text-[#424753] text-[16px]">Today&apos;s Price</span>
              </th>
              <th className="p-6 text-left w-[272px]">
                <span className="font-bold text-[#424753] text-[16px]">Options</span>
              </th>
              <th className="p-6 w-[168px]" />
            </tr>
          </thead>
          <tbody>
            {/* Row 1 — Limited Time Offer */}
            <tr className="bg-[rgba(239,246,255,0.5)] border-l-4 border-[#005cbd]">
              <td className="pl-6 py-6 pr-0">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-start">
                    <span className="text-[#191c22] text-[16px] leading-6">Presidential Sea Front Suite</span>
                    <div className="bg-[#b61b4a] px-2 py-0.5 rounded-[4px] shrink-0 mt-0.5">
                      <div className="text-white font-bold text-[10px] uppercase tracking-[0.5px] leading-4">
                        <p>LIMITED TIME</p>
                        <p>OFFER</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#424753] text-[16px] leading-6">85m² • Panoramic Sea View • Infinity Pool Access</span>
                  <div className="flex gap-1 items-center cursor-pointer">
                    <IconRoomLink />
                    <span className="text-[#005cbd] font-semibold text-[16px] leading-6">Room details</span>
                  </div>
                </div>
              </td>
              <td className="pl-6 py-6">
                <div className="flex gap-1 items-center">
                  <IconPerson /><IconPerson /><IconPerson /><IconPerson />
                </div>
              </td>
              <td className="pl-6 py-6">
                <p className="text-[#424753] text-[16px] line-through leading-6">$1,295</p>
                <p className="text-[#b61b4a] font-bold text-[24px] leading-8">$862</p>
                <p className="text-[#424753] text-[16px] leading-6">Includes taxes &amp; fees</p>
              </td>
              <td className="pl-6 py-6">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <IconCheck />
                    <span className="text-[#16a34a] text-[16px] leading-6">Free Airport Transfer</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IconCheck />
                    <span className="text-[#16a34a] text-[16px] leading-6">All-Inclusive Premium</span>
                  </div>
                  <span className="text-[#ba1a1a] font-bold text-[16px] leading-6">Only 1 room left!</span>
                </div>
              </td>
              <td className="pr-6 py-6">
                <div className="flex justify-end items-center">
                  <button className="bg-[#b61b4a] hover:bg-rose-800 transition-colors flex items-center justify-center px-6 py-2 rounded-lg shadow-sm cursor-pointer">
                    <span className="text-white text-[16px] leading-6">Select</span>
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 2 — Deluxe Garden View */}
            <tr className="border-t border-[rgba(194,198,213,0.3)]">
              <td className="pl-6 py-6 pr-0">
                <div className="flex flex-col gap-2">
                  <span className="text-[#191c22] text-[16px] leading-6">Deluxe Garden View Room</span>
                  <span className="text-[#424753] text-[16px] leading-6">32m² • Balcony • Garden View • 1 King Bed</span>
                  <div className="flex gap-1 items-center cursor-pointer">
                    <IconRoomLink />
                    <span className="text-[#005cbd] font-semibold text-[16px] leading-6">Room details</span>
                  </div>
                </div>
              </td>
              <td className="pl-6 py-6">
                <div className="flex gap-1 items-center">
                  <IconPerson /><IconPerson />
                </div>
              </td>
              <td className="pl-6 py-6">
                <p className="text-[#424753] text-[16px] line-through leading-6">$345</p>
                <p className="text-[#191c22] font-bold text-[24px] leading-8">$264</p>
                <p className="text-[#424753] text-[16px] leading-6">Includes taxes &amp; fees</p>
              </td>
              <td className="pl-6 py-6">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <IconCheck />
                    <span className="text-[#16a34a] text-[16px] leading-6">Free Cancellation</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IconCheck />
                    <span className="text-[#16a34a] text-[16px] leading-6">Breakfast Included</span>
                  </div>
                </div>
              </td>
              <td className="pr-6 py-6">
                <div className="flex justify-end items-center">
                  <button className="bg-[#005cbd] hover:bg-blue-800 transition-colors flex items-center justify-center px-6 py-2 rounded-lg cursor-pointer">
                    <span className="text-white text-[16px] leading-6">Select</span>
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 3 — Junior Suite */}
            <tr className="border-t border-[rgba(194,198,213,0.3)]">
              <td className="pl-6 py-6 pr-0">
                <div className="flex flex-col gap-2">
                  <span className="text-[#191c22] text-[16px] leading-6">Junior Suite with Private Pool</span>
                  <span className="text-[#424753] text-[16px] leading-6">45m² • Private Pool • Sea View • King Bed</span>
                  <div className="flex gap-1 items-center cursor-pointer">
                    <IconRoomLink />
                    <span className="text-[#005cbd] font-semibold text-[16px] leading-6">Room details</span>
                  </div>
                </div>
              </td>
              <td className="pl-6 py-6">
                <div className="flex gap-1 items-center">
                  <IconPerson /><IconPerson /><IconPersonSmall />
                </div>
              </td>
              <td className="pl-6 py-6">
                <p className="text-[#424753] text-[16px] line-through leading-6">$626</p>
                <p className="text-[#191c22] font-bold text-[24px] leading-8">$445</p>
                <p className="text-[#424753] text-[16px] leading-6">Includes taxes &amp; fees</p>
              </td>
              <td className="pl-6 py-6">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <IconCheck />
                    <span className="text-[#16a34a] text-[16px] leading-6">Free Cancellation</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IconCheck />
                    <span className="text-[#16a34a] text-[16px] leading-6">All-Inclusive</span>
                  </div>
                  <span className="text-[#b61b4a] font-bold text-[16px] leading-6 whitespace-nowrap">Only 2 rooms left!</span>
                </div>
              </td>
              <td className="pr-6 py-6">
                <div className="flex justify-end items-center">
                  <button className="bg-[#005cbd] hover:bg-blue-800 transition-colors flex items-center justify-center px-6 py-2 rounded-lg cursor-pointer">
                    <span className="text-white text-[16px] leading-6">Select</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
