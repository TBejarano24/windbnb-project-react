import { useState } from "react";

export default function GuestsFilter({
  actualTotalValue,
  onUpdateTotal,
  guestsQuantity,
  setGuestsQuantity,
}) {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleAdultCount = (e) => {
    if (e.target.id === "adults_plus_button") {
      const updatedTotal = parseInt(actualTotalValue) + 1;
      setAdultsCount(adultsCount + 1);
      onUpdateTotal(updatedTotal);
      setGuestsQuantity(parseInt(guestsQuantity) + 1);
    } else if (e.target.id === "adults_minus_button" && adultsCount > 0) {
      const updatedTotal = parseInt(actualTotalValue) - 1;
      setAdultsCount(adultsCount - 1);
      onUpdateTotal(updatedTotal);
      setGuestsQuantity(parseInt(guestsQuantity) - 1);
    }
  };

  const handleChildrenCount = (e) => {
    if (e.target.id === "children_plus_button") {
      const updatedTotal = parseInt(actualTotalValue) + 1;
      setChildrenCount(childrenCount + 1);
      onUpdateTotal(updatedTotal);
      setGuestsQuantity(parseInt(guestsQuantity) + 1);
    } else if (e.target.id === "children_minus_button" && childrenCount > 0) {
      const updatedTotal = parseInt(actualTotalValue) - 1;
      setChildrenCount(childrenCount - 1);
      onUpdateTotal(updatedTotal);
      setGuestsQuantity(parseInt(guestsQuantity) - 1);
    }
  };

  return (
    <div className="w-[85%] lg:absolute lg:w-[25%] lg:top-30">
      <div className="w-[85%] my-2">
        <div className="flex flex-col max-w-[80px]">
          <span className="text-[11px] font-bold text-[#333]">Adults</span>
          <span className="text-[10px] mb-1 text-[#c7c7c7]">
            Ages 13 or above
          </span>
          <div className="flex justify-between items-center">
            <button
              onClick={handleAdultCount}
              id="adults_minus_button"
              className="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm"
            >
              -
            </button>
            <span
              id="adults_counter"
              className="text-[10px] text-[#333] font-bold"
            >
              {adultsCount}
            </span>
            <button
              onClick={handleAdultCount}
              id="adults_plus_button"
              className="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-[85%] my-2">
        <div className="flex flex-col max-w-[80px]">
          <span className="text-[11px] font-bold text-[#333]">Children</span>
          <span className="text-[10px] mb-1 text-[#c7c7c7]">
            Ages 13 or above
          </span>
          <div className="flex justify-between items-center">
            <button
              onClick={handleChildrenCount}
              id="children_minus_button"
              className="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm"
            >
              -
            </button>
            <span
              id="children_counter"
              className="text-[10px] text-[#333] font-bold"
            >
              {childrenCount}
            </span>
            <button
              onClick={handleChildrenCount}
              id="children_plus_button"
              className="px-[5px] bg-[#e4e4e4] border border-[#a0a0a0] text-[10px] text-[#a0a0a0] rounded-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
