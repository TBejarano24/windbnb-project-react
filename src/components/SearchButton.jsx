export default function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      id="search_button_mobile"
      className="flex items-center w-[90px] justify-around bg-[#eb5757] p-[4px_8px] rounded-lg mb-3 lg:m-0 lg:p-[6px_10px]"
    >
      <img className="w-[13px]" src="icons/search-white.svg" alt="" />
      <span className="text-[12px] text-white ">search</span>
    </button>
  );
}
