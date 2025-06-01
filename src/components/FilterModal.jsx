import { useState } from "react";
import SearchButton from "./SearchButton";
import GuestsFilter from "./GuestsFilter";

export default function FilterModal({
  state,
  action,
  setGuestsQuantity,
  guestsQuantity,
  setLocation,
}) {
  const [totalGuestsCounter, setTotalGuestsCounter] = useState("0");

  const handleClose = (e) => {
    if (e.target.classList.contains("modal")) {
      action();
    }
  };

  const handleCloseButton = () => {
    action();
  };

  const handleInput = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div
      id="modal"
      onClick={handleClose}
      className={`${
        state ? "fixed" : "hidden"
      } top-0 left-0 w-full h-screen bg-[#13192c79] modal`}
    >
      <div className="bg-white w-full h-[70%] grid grid-cols-1 grid-rows-[1fr_1fr_1fr_3fr] place-items-center lg:h-[50%] lg:grid-rows-[1fr_2fr]">
        <div className="w-full flex justify-between lg:hidden">
          <span className="font-semibold text-[12px] m-3">
            Edit your search
          </span>
          <button
            onClick={handleCloseButton}
            className="font-bold text-2xl mr-3"
          >
            X
          </button>
        </div>
        <div className="w-[90%] border border-[#ececec] rounded-lg mt-3 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:mt-15 lg:h-[50px] lg:rounded-xl">
          <div className="border-b border-b-[#ececec] lg:border-b-0 lg:border-r lg:border-r-[#ececec]">
            <div className="flex flex-col m-[5px_10px]">
              <span className="text-[7px] text-[#303030] font-semibold lg:text-[9px]">
                LOCATION
              </span>
              <input
                id="location_filter_mobile"
                onChange={handleInput}
                className="text-[10px] lg:text-[12px]"
                type="text"
                placeholder="Add Location"
              />
            </div>
          </div>
          <div className="flex flex-col lg:border-r lg:border-r-[#ececec]">
            <div className="flex flex-col m-[5px_10px]">
              <span className="text-[7px] text-[#303030] font-semibold lg:text-[9px]">
                GUESTS
              </span>
              <span className="text-[10px] lg:text-[12px]">
                <span id="total_guests_counter">{totalGuestsCounter}</span>{" "}
                Guests
              </span>
            </div>
          </div>
          <div className="hidden lg:block place-self-center">
            <SearchButton />
          </div>
        </div>
        <GuestsFilter
          actualTotalValue={totalGuestsCounter}
          onUpdateTotal={setTotalGuestsCounter}
          guestsQuantity={guestsQuantity}
          setGuestsQuantity={setGuestsQuantity}
        />
        <div className="self-end lg:hidden">
          <SearchButton onClick={handleCloseButton} />
        </div>
      </div>
    </div>
  );
}
