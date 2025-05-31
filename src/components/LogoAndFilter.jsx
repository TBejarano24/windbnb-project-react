import { useState } from "react";
import FilterModal from "./FilterModal";

export default function LogoAndFilter({
  setGuestsQuantity,
  guestsQuantity,
  setLocation,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="flex flex-col items-start w-full h-[120px] max-w-[320px] sm:max-w-[580px] sm:flex-row sm:items-center sm:justify-between lg:max-w-[870px]">
      <img
        className="m-[16px]"
        src="/icons/logo-f7862584.svg"
        alt="windbnb logo"
      />
      <div
        className="w-[80%] h-[45px] mt-[8px] bg-white place-self-center rounded-xl grid grid-cols-[2.5fr_2fr_0.9fr] shadow-[0px_2px_5px_#dadada] sm:w-[330px]"
        onClick={handleClick}
      >
        <div className="font-semibold text-[12px] flex justify-center items-center border-r-1 border-[#ebebeb] text-[#ccc]">
          Add location
        </div>
        <div className="font-semibold text-[12px] flex justify-center items-center border-r-1 border-[#ebebeb] text-[#ccc]">
          Add guests
        </div>
        <div className="flex justify-center items-center">
          <img src="/icons/search.svg" alt="search icon" width="18px" />
        </div>
      </div>
      <FilterModal
        state={isOpen}
        action={handleClick}
        setGuestsQuantity={setGuestsQuantity}
        guestsQuantity={guestsQuantity}
        setLocation={setLocation}
      />
    </div>
  );
}
